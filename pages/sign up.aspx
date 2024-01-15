<%@ Page Title="" Language="C#" MasterPageFile="~/pages/Site1.Master" AutoEventWireup="true" CodeBehind="sign up.aspx.cs" Inherits="newnbaproject.pages.WebForm5" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script src="../js/Register.js"></script>
    <style type="text/css">
        .lablestyle{
            color:red;
            font-size:20px;
        }
    </style>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
       <form id="form1" method="post" action="" onsubmit="return IsValid();"> 
       <div id="divform">
          <table id="tableform_signup">

              <tr> <th id="login_th">sign up</th></tr>
               <tr>
     <td><input type="text" id="fullname" name="fullname" placeholder="full name" /> </td>
                   <td><lable id="lable1" class="lablestyle"></lable></td>
 </tr>
                <tr>
                    <td><input type="text" id="username_signup" name="username_signup" placeholder="username" /> </td>
                    <td><lable id="lable2" class="lablestyle"></lable></td>
                </tr>
                   <tr>
    <td><input type="password" id="password_signup" name="password_signup" placeholder="password" /></td><td><lable id="lable3" class="lablestyle"></lable></td></tr>
                             <tr>
<td><input type="password" id="confirm_password" name="confirm_password" placeholder="confirm password" /></td><td><lable id="lable4" class="lablestyle"></lable></td></tr>
              <tr><td><input type="text" id="email" name="email" placeholder="email" /></td><td><lable id="lable5" class="lablestyle"></lable></td> </tr>
     <tr> <td>   <Select name="location" id="location"value="location">
    <option value="israel"> israel</option>
   <option value="usa"> usa</option>
   <option value="europe">europe </option>
   <option value="other">other </option>
</Select>
        </td>  
          </tr>
              <tr><td>enter your gender</td><td><lable id="lable7" class="lablestyle"></lable></td></tr>
              <tr><td><input type="radio" name="gender" value="female" />female
                  <input type="radio" name="gender" value="male" />male
                  <input type="radio" name="gender" value="othergendere" />other             
                      </td></tr>
             <tr><td>  <input type="submit" name="submit" id="submit" value="submit" />
  <input type="reset" name="reset" id="reset" value="reset" /> </td></tr>
      
          </table>
       </div>
       
       </form>
</asp:Content>
