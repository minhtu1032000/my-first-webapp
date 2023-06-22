package eiu.cit;

import io.jsonwebtoken.Claims;
import java.io.IOException;
import java.io.PrintWriter;
import java.security.Key;
import java.security.NoSuchAlgorithmException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Base64;
import java.util.Date;
import java.util.UUID;

import javax.crypto.spec.SecretKeySpec;
import javax.naming.NamingException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.security.Keys;
import java.util.logging.Level;
import java.util.logging.Logger;

import javax.xml.bind.DatatypeConverter;

@WebServlet(name = "StudentServlet", urlPatterns = {"/addStudentServlet"}, loadOnStartup = 1)
public class addStudentServlet extends HttpServlet {

    private final static String url = "jdbc:mysql://localhost:3306/myfirstwebapp"; // table details
    private final static String username = "eiu";
    private final static String password = "4#Eiumysql#4";

    private static final long serialVersionUID = 1L;

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
          Cookie ck[] = req.getCookies();
        if (ck != null && ck[0].getName().equals("login")) {

            Claims claims = null;
            try {
                claims = Configuration.decodeJWT(ck[0].getValue());
            } catch (NoSuchAlgorithmException e1) {
                // TODO Auto-generated catch block
                e1.printStackTrace();
            }

            //String query = "SELECT code, name FROM course";
            Object user = claims.get("login");
            String query = "SELECT login,role FROM account";

            Connection con;
            try {
                Class.forName("com.mysql.cj.jdbc.Driver");
                con = DriverManager.getConnection(url, username, password);
                PreparedStatement st = con.prepareStatement(query);
                st.setString(1, (String) user);
                ResultSet rs = st.executeQuery();

                JSONArray objArray = new JSONArray();
                if (claims.get("role").equals("admin")) {
                    while (rs.next()) {
                        JSONObject obj = new JSONObject();
                        obj.put("code", rs.getString("code"));
                        obj.put("role", rs.getString("student"));
                        objArray.put(obj);
                    }
                } else {
                    resp.setStatus(302);
                }
                st.close();
                con.close();

                PrintWriter writer = resp.getWriter();
                writer.println(objArray);

            } catch (SQLException e) {
                // TODO Auto-generated catch block
                e.printStackTrace();

            } catch (ClassNotFoundException e) {
                // TODO Auto-generated catch block
                e.printStackTrace();

            }

        } else {
            resp.setStatus(302);
        }

    }
}
