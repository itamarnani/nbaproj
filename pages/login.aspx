    <%@ Page Title="" Language="C#" MasterPageFile="~/pages/Site1.Master" AutoEventWireup="true" CodeBehind="login.aspx.cs" Inherits="newnbaproject.pages.WebForm1" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div></div>
       
             <form id="form1" method="post" action=""> 
                 <div id="divform">
                    <table id="tableform">
                        <tr> <th id="login_th">sign in</th></tr>
                          <tr>
                              <td><input type="text" id="username" name="username" placeholder="username" /> </td>
                          </tr>
                             <tr>
              <td><input type="password" id="password" name="password" placeholder="password" /></td></tr>
                    </table>
                 </div>
       
                 </form>
        
        

</asp:Content>
