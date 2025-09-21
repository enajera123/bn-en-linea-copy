import Image from "next/image";

export default function Home() {
  return (
   <tr id="MainContent" class="MainContent"><td><div class="contentBlock"><div id="Modal" class="modal"><div id="modalcontent" class="modal-content"><div class="modal-header"><span id="spClose" onclick="Close(this); return false" class="close">×</span><h2> Banco Nacional de Costa Rica</h2></div><div class="modal-body"><p>Para una mejor atención de sus consultas puede llamar a nuestro centro de atención al número 2212-2000 o puede utilizar nuestra opción de BN Chat en nuestro sitio <a href="http://www.bncr.fi.cr/" target="_blank">www.bncr.fi.cr</a></p></div><div class="modal-footer"><input type="button" id="btnClose" value="Aceptar" onclick="Close(this); return false"></div></div></div><div id="workArea">
                        
    <div id="authArea" class="groupMargin">
        
        
        <div id="loginArea">
    <div id="usernamePage" style="display: block;">        
    <div id="loginMessage" class="groupMargin"></div>
    <form method="post" id="loginForm" class="paginatedPageForm" autocomplete="off" novalidate="novalidate" onkeypress="if (event &amp;&amp; event.keyCode == 13) Login.submitLoginRequest();" action="/adfs/ls?version=1.0&amp;action=signin&amp;realm=urn%3AAppProxy%3Acom&amp;appRealm=37d0e840-bdc3-e911-90f3-005056b6cfbb&amp;returnUrl=https%3A%2F%2Fbncr.bnonline.fi.cr%2FBNCR.InternetBanking.Web&amp;client-request-id=56348C31-21FA-0012-9F79-5856FA21DC01">
        <div id="formsAuthenticationArea"><div id="error" class="fieldMargin error errorUsernamePaginated smallText" style="display: none;">
                <span id="errorText" for="" class="errorText" aria-live="assertive" role="alert"></span>
            </div><div id="formsAuthenticationArea"><div id="userNameArea">
                <label id="userNameInputLabel" for="userNameInput" class="hidden">User Account</label>
                
            <div id="divCertificateAuthentication"><div id="authOptionLinks" class="groupMargin"><div id="optionsContainer" class="optionButtonContainer" onclick="paginationManager.displayNextPage(); return false;" onkeypress="if (event &amp;&amp; (event.keyCode == 32 || event.keyCode == 13)) paginationManager.displayNextPage(); return false;" style="display: none;"><div id="optionIcon"><img alt="icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsSAAALEgHS3X78AAAA9UlEQVRIie2V4W3CMBSEPyr+wwhsQJggvg0YoRvACIzQEToCTPBgA0agG7BBKkuHZIhF/ySVqHpSZPvsd+f4PdmTrusYE2+jqv+GwSSlNOoZTd2egOPA2globwbHiNgNqS4p67Wvn+TXN5jWSEnJVXAFPiPiKmkBvHtJ5i6S5ubmLpReJfYMLLQHZqbyeGtuaW4NNECulI25raQmG5d6tSNaFOJYiEK87DcFN3PsHWoGZ+CrGO/dHgru8DCHY84/GuTz9s4ErCLiw/zanNzHcyvzjWPvUE2yF/YSVktiRPR2/fQPhsbfeQ9Gv65bf4Pj/9F/DuAbVoZQOfjl+HcAAAAASUVORK5CYII="></div><span role="button" class="optionButton" tabindex="0" href="#" id="FormsAuthentication" onclick="paginationManager.displayNextPage(); return false;" onkeypress="if (event &amp;&amp; (event.keyCode == 32 || event.keyCode == 13)) paginationManager.displayNextPage(); return false;">Sign in using your username and password</span></div><div id="optionsContainer" class="optionButtonContainer" onclick="SelectOption('CertificateAuthentication'); return false;" onkeypress="if (event &amp;&amp; (event.keyCode == 32 || event.keyCode == 13)) SelectOption('CertificateAuthentication'); return false;" style="display: none;"><div id="optionIcon"><img alt="icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsSAAALEgHS3X78AAABSUlEQVRIDbWVgVHDMAxFBdcB2ARGqCZINiBskA3SbBA2KBvQCT6dgLIBG5QNwn1OAuOzOdcJuvPZcZz/bEmRr+Z5FjdV/XkotzcR2QL4SH2RAhxF5KVQfrA+C0kBRgC7EvXoxEnIdeFO/7JHE7/lyVX1Zm0Ad7zNQdYAiLklCVkDMFgsziYu1vccbBaKjzmoDxYBctmmqlnAA4D9EmhsvwAUV9VWRO5s6gTgeRWAqlJ0HwTK55kZHYBTDSDMIhc/UNfaweaq3baxXbYuDqAN3jOf6aKGa2rc5Sdwn0+JNVO0pgrwb+YAD2CfAPXRmovsKwb0rWVLYz6fAvGGNaY2XcP/oBORVxNsonVdrQu/YxDk+dFqzGhjqf0HJBNkXpfv1kqvzqylit1Q+G01gPZk/b1PqCovFLZFAArvANA9FGU59pJM8ctOJyKfiBh/XkPI7UsAAAAASUVORK5CYII="></div><span role="button" class="optionButton" tabindex="0" href="#" id="CertificateAuthentication" onclick="SelectOption('CertificateAuthentication'); return false;" onkeypress="if (event &amp;&amp; (event.keyCode == 32 || event.keyCode == 13)) SelectOption('CertificateAuthentication'); return false;" style="display: none;">Sign in using a certificate</span></div><div id="optionsContainer" class="optionButtonContainer" onclick="SelectOption('GaudiAuthenticationProvider'); return false;" onkeypress="if (event &amp;&amp; (event.keyCode == 32 || event.keyCode == 13)) SelectOption('GaudiAuthenticationProvider'); return false;" style="display: none;"><div id="optionIcon"><img alt="icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsSAAALEgHS3X78AAABM0lEQVRIDe1V0U3DQAx9QR0AJqBskA2SN0G7AbBBOgEdoRsQNggTuGxQNigbhAmCLN5J6eVEI5QggfCPc87de/azdZd1XYc57WJW9J8gyMqynFWjhfwLgP3E2CWAIhDszWw7JTpJxyt+f5MXqSDJCsAaQG1mNck7rS8BHAFUZtZKBte6BdD43rMEJB3gWsvQ+Ef5d9dVRE74AOBN+1d+1sxOhiUlkWfzGsU2AK4ALLVeyd8AyEUCEZ/YgMDM/EATxXYuiUuj0LO8y3NQBRsza2K80U0mWfckqRJbKpL5twhIema3yjw3s6Mq8yFw2e5VxYA4OUUR+LKnuWvckPRvn6Cd5Fzr/+A2OEvQayw0QcFaEQbZnkaNKT5L3yrDYNkI8qT9nfdg9uu6iBo4mf0/+l8bgA/2U2G6PTxJhAAAAABJRU5ErkJggg=="></div><span role="button" class="optionButton" tabindex="0" href="#" id="GaudiAuthenticationProvider" onclick="SelectOption('GaudiAuthenticationProvider'); return false;" onkeypress="if (event &amp;&amp; (event.keyCode == 32 || event.keyCode == 13)) SelectOption('GaudiAuthenticationProvider'); return false;">GAUDI Adapter Authentication</span></div><div id="waitingWheelDiv" style="display: none;"><div id="WaitingWheel">

    

    <div id="floatingCirclesG">
        <div class="f_circleG" id="frotateG_01"></div>
        <div class="f_circleG" id="frotateG_02"></div>
        <div class="f_circleG" id="frotateG_03"></div>
        <div class="f_circleG" id="frotateG_04"></div>
        <div class="f_circleG" id="frotateG_05"></div>
        <div class="f_circleG" id="frotateG_06"></div>
        <div class="f_circleG" id="frotateG_07"></div>
        <div class="f_circleG" id="frotateG_08"></div>
    </div>
</div></div><input type="button" class="botonCert" alt="Ingresar con certificado" title="Ingresar con certificado" onclick="return GaudiClick();" tabindex="4"></div></div><div id="divuserNameInput"><input id="userNameInput" name="UserName" type="email" value="" tabindex="1" class="text fullWidth usrInput InputNoKeyBoard" onkeypress="if (event &amp;&amp; event.keyCode == 13) paginationManager.validateAndNext();" spellcheck="false" placeholder="Identificación" autocomplete="off" maxlength="25"></div></div><div id="passwordArea">
                <label id="passwordInputLabel" for="passwordInput" class="hidden">Password</label>
                <input id="passwordInput" name="Password" type="password" tabindex="2" class="text fullWidth usrInput InputNoKeyBoard" placeholder="Contraseña" autocomplete="off" maxlength="16" onpaste="return false" oncopy="return false" ondrop="return false" style="font-size: 20px;">
            </div><div id="kmsiArea" class="kmsiAreaPaginated" style="display:none">
                <input type="checkbox" name="Kmsi" id="kmsiInput" value="true" tabindex="2">
                <label for="kmsiInput">Keep me signed in</label>
            </div><div id="submissionArea" class="submitMargin"><span id="submitButton" class="submit submitPaginated" tabindex="3" role="button" onkeypress="if (event &amp;&amp; (event.keyCode == 32 || event.keyCode == 13)) Login.submitLoginRequest();" onclick="return Login.submitLoginRequest();">Sign in</span></div></div><div class="divInfo" id="divInfoId"><div id="lostPassword"><a href="https://bncr.bnonline.fi.cr/Login/RedefinirClave/SolicitudOlvidoClave.aspx" target="_blank"><p class="txtBlue"><span class="dot"></span> ¿Olvidó su contraseña? </p></a></div></div></div>
    <input name="nds-pmd" type="hidden" value="{&quot;jvqtrgQngn&quot;:{&quot;oq&quot;:&quot;1920:919:1936:1048:1920:1032&quot;,&quot;wfi&quot;:&quot;flap-1&quot;,&quot;ji&quot;:&quot;2.5.3&quot;,&quot;oc&quot;:&quot;2501pp0s72219oop&quot;,&quot;fe&quot;:&quot;1080k1920 24&quot;,&quot;qvqgm&quot;:&quot;360&quot;,&quot;jxe&quot;:110556,&quot;syi&quot;:&quot;snyfr&quot;,&quot;si&quot;:&quot;si,zc4,jroz&quot;,&quot;sn&quot;:&quot;sn,zcrt,btt,jni&quot;,&quot;us&quot;:&quot;n00s4p571pr7p59r&quot;,&quot;cy&quot;:&quot;Jva32&quot;,&quot;sg&quot;:&quot;{\&quot;zgc\&quot;:0,\&quot;gf\&quot;:snyfr,\&quot;gr\&quot;:snyfr}&quot;,&quot;sp&quot;:&quot;{\&quot;gp\&quot;:gehr,\&quot;ap\&quot;:gehr}&quot;,&quot;sf&quot;:&quot;gehr&quot;,&quot;jt&quot;:&quot;q466r3387o9p5nsr&quot;,&quot;sz&quot;:&quot;87o62oo12qp20635&quot;,&quot;vce&quot;:&quot;apvc,0,68q020ns,2,1;fg,0,hfreAnzrVachg,0,cnffjbeqVachg,0;ss,1,hfreAnzrVachg;xx,5s0o,0,hfreAnzrVachg;gf,0,5s0p;ss,1,hfreAnzrVachg;zz,2sn,6r6,1r,;so,5o,hfreAnzrVachg;zzf,3pq,0,n,0 157,rq5 8328,132q,1440,-4p373,4q192,-3886;zzf,42s,42s,n,0 56,26pr n874,116r,12q2,-63q83,6409s,10o;zzf,430,430,n,ABC;zzf,445,445,n,1844 16r5,18nr 5612,p4n,q4r,-20357,33q07,-1o;zzf,434,434,n,ABC;zzf,43s,43r,n,ABC;zzf,433,434,n,ABC;zzf,42s,42s,n,ABC;zzf,431,431,n,ABC;zzf,435,435,n,ABC;zz,1276,5o6,73,;gf,0,9r84;zz,1n0q,560,o,;zzf,nn7,372n,32,584 16q1,6q1 3q4r,1o4,115p,-1346o,1346o,-3;zz,80r,4q6,38o,;zzf,9255,9n63,32,17 p8,nr2 6so4,2o7,1pq7,-1osrr,20n01,-7q;gf,0,15q9o;zz,3o3p,3sq,382,;gf,0,198q7;zzf,1oqp,5718,32,r81 1ors,2573 3710,1s6,13or,-1344r,nroo,72;zzf,28n9,28n9,32,ABC;gf,0,1qq5p;&quot;,&quot;vp&quot;:&quot;0,qr;&quot;,&quot;ns&quot;:&quot;&quot;,&quot;qvg&quot;:&quot;&quot;,&quot;zvr&quot;:&quot;&quot;,&quot;zvq&quot;:&quot;&quot;,&quot;fvq&quot;:&quot;&quot;},&quot;fvq&quot;:&quot;2786235o-q177-4s82-no75-0norn588s0qo&quot;,&quot;jg&quot;:&quot;1.j-572003.1.2.8uqIcgT-ZkqAV9Q6h4LT2N,,.GvVHrxFWIz78TgziqtFmbwi7nijekxW-ISQtO5_zWveH-a3RIFhxEgFEYnRQGStLb_ln6VasbWLt0Sv_58R0ZJCoXMkO_ZKjSziTr689M6Xe2iVcL7697njsbFJPWdqmiDYLbadbNju1w_brHq6epltOVuzKy5yHC6fp2ZjgNgNjBvoAp3uf1krfBL0qsuFerab02hsFN3NxMAbSDWeGMXn63NRF_Zzg9x1uPsZd4daLUfuDk9biLUGDsEHr3rrZ&quot;}"></form>
    <div id="nextButtonArea">
        <span id="nextButton" class="next" tabindex="0" role="button" onkeypress="if (event &amp;&amp; (event.keyCode == 32 || event.keyCode == 13)) paginationManager.validateAndNext();" onclick="return paginationManager.validateAndNext();">Next</span>
    </div>
</div>

    <div id="primaryOptionsPage" style="display: none;">
    <div id="optionsBannerContainer" class="bannerContainer">
        <div id="optionsBackButton" class="back" tabindex="0" role="button" onkeypress="if (event &amp;&amp; (event.keyCode == 32 || event.keyCode == 13)) paginationManager.displayPreviousPage();" onclick="return paginationManager.displayPreviousPage();" aria-label="Back">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048" width="15" height="15" fill="currentColor" style="margin-top: 5Px;">
                <path d="M2048 960q0 26-19 45t-45 19H219l786 787q19 19 19 45t-19 45-45 19q-26 0-45-19L22 1008q-11-11-16-22t-6-26q0-15 5-26t17-22L915 19q19-19 45-19t45 19 19 45q0 26-19 45L219 896h1765q26 0 45 19t19 45z"></path>
            </svg>
        </div>
        <div id="identityBannerOptions" class="identityBanner"></div>
    </div>
    <div id="primaryAuthOptionsTitle" class="authOptionsTitlePaginated">Authentication options</div>
    <div id="errorOption" class="error authOptionsError smallText">
        <span id="errorTextOption" class="authOptionsErrorText" for="" aria-live="assertive" role="alert"></span>
    </div>
    <input id="optionForms" type="hidden" name="AuthMethod" value="FormsAuthentication">
         <div id="authOptions">
         <form id="options" method="post" action="https://auth.bncr.fi.cr:443/adfs/ls?version=1.0&amp;action=signin&amp;realm=urn%3AAppProxy%3Acom&amp;appRealm=37d0e840-bdc3-e911-90f3-005056b6cfbb&amp;returnUrl=https%3A%2F%2Fbncr.bnonline.fi.cr%2FBNCR.InternetBanking.Web&amp;client-request-id=56348C31-21FA-0012-9F79-5856FA21DC01">
             <script type="text/javascript">
                function SelectOption(option) {
                    var w = document.getElementById('waitingWheelDiv');
                    if(w) w.style.display = 'inline';
                    var i = document.getElementById('optionSelection');
                    i.value = option;
                    document.forms['options'].submit();
                    return false;
                }
             </script>
             <input id="optionSelection" type="hidden" name="AuthMethod">
             <input id="userNameInputOptionsHolder" name="UserName" value="" type="hidden">
             
         <input name="nds-pmd" type="hidden" value="{&quot;jvqtrgQngn&quot;:{&quot;oq&quot;:&quot;1920:919:1936:1048:1920:1032&quot;,&quot;wfi&quot;:&quot;flap-1&quot;,&quot;ji&quot;:&quot;2.5.3&quot;,&quot;oc&quot;:&quot;2501pp0s72219oop&quot;,&quot;fe&quot;:&quot;1080k1920 24&quot;,&quot;qvqgm&quot;:&quot;360&quot;,&quot;jxe&quot;:110556,&quot;syi&quot;:&quot;snyfr&quot;,&quot;si&quot;:&quot;si,zc4,jroz&quot;,&quot;sn&quot;:&quot;sn,zcrt,btt,jni&quot;,&quot;us&quot;:&quot;n00s4p571pr7p59r&quot;,&quot;cy&quot;:&quot;Jva32&quot;,&quot;sg&quot;:&quot;{\&quot;zgc\&quot;:0,\&quot;gf\&quot;:snyfr,\&quot;gr\&quot;:snyfr}&quot;,&quot;sp&quot;:&quot;{\&quot;gp\&quot;:gehr,\&quot;ap\&quot;:gehr}&quot;,&quot;sf&quot;:&quot;gehr&quot;,&quot;jt&quot;:&quot;q466r3387o9p5nsr&quot;,&quot;sz&quot;:&quot;87o62oo12qp20635&quot;,&quot;vce&quot;:&quot;apvc,0,68q020ns,2,1;fg,0,hfreAnzrVachg,0,cnffjbeqVachg,0;ss,1,hfreAnzrVachg;xx,5s0o,0,hfreAnzrVachg;gf,0,5s0p;ss,1,hfreAnzrVachg;zz,2sn,6r6,1r,;so,5o,hfreAnzrVachg;zzf,3pq,0,n,0 157,rq5 8328,132q,1440,-4p373,4q192,-3886;zzf,42s,42s,n,0 56,26pr n874,116r,12q2,-63q83,6409s,10o;zzf,430,430,n,ABC;zzf,445,445,n,1844 16r5,18nr 5612,p4n,q4r,-20357,33q07,-1o;zzf,434,434,n,ABC;zzf,43s,43r,n,ABC;zzf,433,434,n,ABC;zzf,42s,42s,n,ABC;zzf,431,431,n,ABC;zzf,435,435,n,ABC;zz,1276,5o6,73,;gf,0,9r84;zz,1n0q,560,o,;zzf,nn7,372n,32,584 16q1,6q1 3q4r,1o4,115p,-1346o,1346o,-3;zz,80r,4q6,38o,;zzf,9255,9n63,32,17 p8,nr2 6so4,2o7,1pq7,-1osrr,20n01,-7q;gf,0,15q9o;zz,3o3p,3sq,382,;gf,0,198q7;zzf,1oqp,5718,32,r81 1ors,2573 3710,1s6,13or,-1344r,nroo,72;zzf,28n9,28n9,32,ABC;gf,0,1qq5p;&quot;,&quot;vp&quot;:&quot;0,qr;&quot;,&quot;ns&quot;:&quot;&quot;,&quot;qvg&quot;:&quot;&quot;,&quot;zvr&quot;:&quot;&quot;,&quot;zvq&quot;:&quot;&quot;,&quot;fvq&quot;:&quot;&quot;},&quot;fvq&quot;:&quot;2786235o-q177-4s82-no75-0norn588s0qo&quot;,&quot;jg&quot;:&quot;1.j-572003.1.2.8uqIcgT-ZkqAV9Q6h4LT2N,,.GvVHrxFWIz78TgziqtFmbwi7nijekxW-ISQtO5_zWveH-a3RIFhxEgFEYnRQGStLb_ln6VasbWLt0Sv_58R0ZJCoXMkO_ZKjSziTr689M6Xe2iVcL7697njsbFJPWdqmiDYLbadbNju1w_brHq6epltOVuzKy5yHC6fp2ZjgNgNjBvoAp3uf1krfBL0qsuFerab02hsFN3NxMAbSDWeGMXn63NRF_Zzg9x1uPsZd4daLUfuDk9biLUGDsEHr3rrZ&quot;}"></form>
      </div>
</div>

    


    <script type="text/javascript">
        var options = {
            pages: ["usernamePage","primaryOptionsPage","passwordPage"],
            currentPageIndex: 0
        };
        paginationManager.Initialize(options);
    </script>
</div>

    </div>

                    </div></div></td></tr>
      );
}
