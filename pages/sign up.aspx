<%@ Page Title="" Language="C#" MasterPageFile="~/pages/Site1.Master" AutoEventWireup="true" CodeBehind="sign up.aspx.cs" Inherits="newnbaproject.pages.WebForm5" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
       <form id="form1" method="post" action=""> 
       <div id="divform">
          <table id="tableform_signup">
              <tr> <th id="login_th">sign up</th></tr>
                <tr>
                    <td><input type="text" id="username_signup" name="username_signup" placeholder="username" /> </td>
                </tr>
                   <tr>
    <td><input type="password" id="password_signup" name="password_signup" placeholder="password" /></td></tr>
                             <tr>
<td><input type="password" id="confirm_password" name="confirm_password" placeholder="confirm password" /></td></tr>
     <tr> <td>   <Select name="your location">
    <option value=“israel> israel</option>
   <option value=“usa> usa</option>
   <option value=“europe>europe </option>
   <option value=“other>other </option>
</Select>
         </td>  
         </tr> 
              <tr><td>enter your gender</td></tr>
              <tr><td><input type="radio" name="gender" value="fenale" />female
                  <input type="radio" name="gender" value="male" />male
                  <input type="radio" name="gender" value="othergendere" />other
                      </td></tr>
/>      
          </table>
       </div>
       
       </form>
</asp:Content>
