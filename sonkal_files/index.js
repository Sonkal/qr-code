// AJAX -->
function processRequest(httpRequest, kam){
	if (httpRequest.readyState == 4){
		if(httpRequest.status == 200){
			doc.getElementById(kam).innerHTML = httpRequest.responseText;
			
		}else{
			alert("Loading Error... " + httpRequest.status +" : "+ httpRequest.statusText);
		}
	}
	/*else{
		if (typeof kam == 'string' && kam != ''){
			doc.getElementById(kam).innerHTML = 'Loading...';
		}
    }*/
}
function includeAjax(stranka, kam){
	var httpRequest;
	if(typeof window.ActiveXObject != 'undefined'){
		httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
	}else{  
		httpRequest = new XMLHttpRequest();
	}
	httpRequest.open("GET", stranka, true);
	httpRequest.onreadystatechange= function () 
	{
		processRequest(httpRequest, kam);
	}
	httpRequest.send(null);
}

function includeAjaxKomentare(stranka, kam){
	var httpRequest;	
	if(typeof window.ActiveXObject != 'undefined'){
		httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
	}else{  
		httpRequest = new XMLHttpRequest();
	}
	
	httpRequest.open("GET", stranka, true);
	httpRequest.onreadystatechange = function() {//Call a function when the state changes.
		if(httpRequest.readyState == 4 && httpRequest.status == 200) {
			doc.getElementById(kam).innerHTML=smajliciKomentare(httpRequest.responseText);
		}
	}
	httpRequest.send(null);
}
// POST
vl_stranka="";
vl_post="";
vl_kam="";
function includeAjaxPost(stranka, post, kam){
	if(post.length<3 || post.indexOf("=&")!=-1 || (post.substring(post.length-1, post.length)=="=" && !(post.substring(post.length-12, post.length)=="log_captcha="))){
		if(stranka!="hledat.php")
			window.alert("Musíte vyplnit celý formuláø!");
		return 0;
	}
	if(vl_stranka==stranka || vl_post==post || vl_kam==kam)
		return 0;
	vl_stranka=stranka;
	vl_post=post;
	vl_kam=kam;
	var httpRequest;	
	if(typeof window.ActiveXObject != 'undefined'){
		httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
	}else{  
		httpRequest = new XMLHttpRequest();
	}
	httpRequest.open("POST", stranka, true);

	//httpRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded; text/html; charset=windows-1250");
	httpRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	httpRequest.setRequestHeader("Content-length", post.length);
	httpRequest.setRequestHeader("Connection", "close");

	httpRequest.onreadystatechange = function() {
		if(httpRequest.readyState == 4 && httpRequest.status == 200) {
			doc.getElementById(kam).innerHTML = httpRequest.responseText;
			vl_stranka="";
			vl_post="";
			vl_kam="";
		}
	}
	httpRequest.send(post);
}

function includeAjaxPostO(stranka, post, obj){
	var httpRequest;	
	if(typeof window.ActiveXObject != 'undefined'){
		httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
	}else{  
		httpRequest = new XMLHttpRequest();
	}
	httpRequest.open("POST", stranka, true);
	//httpRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded; text/html; charset=windows-1250");
	httpRequest.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	httpRequest.setRequestHeader("Content-length", post.length);
	httpRequest.setRequestHeader("Connection", "close");
	httpRequest.onreadystatechange = function() {
		if(httpRequest.readyState == 4 && httpRequest.status == 200) {
			document.getElementById("d_hidden"+obj).innerHTML = "";
		}
	}
	httpRequest.send(post);
}
// <-- AJAX

function history_menu(){
	if(doc.getElementById("d_historie_novinek_list").style.display=="none")
		doc.getElementById("d_historie_novinek_list").style.display="";
	else
		doc.getElementById("d_historie_novinek_list").style.display="none";
}

function icobublina(co, jak){
	doc.getElementById(co).style.display=jak;
}

function vycisti_input_search(hledat){
	if(document.getElementById("input_search").value==hledat)document.getElementById("input_search").value="";
	document.getElementById("input_search").style.fontStyle='normal';
}

function f_zvyrazni_fotoodkaz(a){
	doc.getElementById("h2_fotoodkaz_"+a).style.backgroundColor="orange";
	var j=1;
	var i=1;
	while(j==1){
		if(nadpis=doc.getElementById("h2_fotoodkaz_"+(i))){
			if((i++)!=a)nadpis.style.backgroundColor="#cdc6ba";
		}
		else j=0;
	}
}
function f_uklidni_fotoodkaz(a){
	doc.getElementById("h2_fotoodkaz_"+a).style.backgroundColor="#cdc6ba";
}
function odkaz_prepni(a){
	odkaz_prepinac=a;
}
function odkaz(kam){
	if(odkaz_prepinac==1)
	doc.location=("index"+language+".php?article="+kam);
}

function menu(menu_ktere){
	
	doc.getElementById(menu_ktere).src=("design/menu"+language+"/"+menu_ktere+"_a.png");
	if("fotogalerie_souteze_taekwondo_kdoakde_odkazy".indexOf(menu_ktere)!=(-1))
	doc.getElementById("div_podmenu_"+menu_ktere).style.display="";
}
function podmenu(polozka){
	doc.getElementById(polozka).src="design/menu"+language+"/"+polozka+"_a.png"
}

function ukaz_minidiskuze_menu(){
	doc.getElementById("minidiskuze_prispevek").style.height="70px";
	doc.getElementById("minidiskuze_prispevek").style.backgroundColor="#e1e1e1";
	doc.getElementById("minidiskuze_menu_skryte").style.display="block";
	var jmeno=new Object;
	if(jmeno=doc.getElementById("input_login_loged"))
		if(doc.getElementById("minidiskuze_jmeno").value=="")doc.getElementById("minidiskuze_jmeno").value=jmeno.value;
	doc.getElementById("tlacitko_zavrit").style.display="inline-block";
}
function skryj_minidiskuze_menu(){
	doc.getElementById("tlacitko_zavrit").style.display="none";
	doc.getElementById("minidiskuze_prispevek").style.height="20px";
	doc.getElementById("minidiskuze_prispevek").style.backgroundColor="silver";
	doc.getElementById("minidiskuze_menu_skryte").style.display="none";
	doc.getElementById("minidiskuze_prispevek").value="";
	doc.getElementById("minidiskuze_jmeno").value="";
}

function submit_minidiskuze(){
	var text=doc.getElementById("minidiskuze_prispevek").value;
	var jmeno=doc.getElementById("minidiskuze_jmeno").value;
	var captcha=doc.getElementById("minidiskuze_captcha").value;
	if((text!="")&&(jmeno!="")){
		var iframe=window.frames["iframe_minidiskuze"].document;
		iframe.getElementById("f_minidiskuze_text").value=text;
		iframe.getElementById("f_minidiskuze_jmeno").value=jmeno;
		iframe.getElementById("f_minidiskuze_captcha").value=captcha;
		iframe.f_minidiskuze.submit();
		doc.getElementById("minidiskuze_prispevek").value="";
		doc.getElementById("minidiskuze_jmeno").value="";
		doc.getElementById("minidiskuze_captcha").value="";
		skryj_minidiskuze_menu();
	}else{
		if (language=="")
			alert("Je tøeba vyplnit pøíspìvek i jméno.");
		else alert("Both contribution and nickname are required.");
	}
}

function minidiskuze_check_reload(){
	if(document.getElementById("minidiskuze_reload").width<2){
		document.getElementById("minidiskuze_reload").src="reload_image.php?a="+Math.floor(Math.random()*1000000000);
		setTimeout('minidiskuze_check_reload()', 60000);
	}
}

function f_minidiskuze_reload(){
	document.location.reload();
}

function minidiskuze_reloaduj_captchu(){
	doc.getElementById("img_minidiskuze_captcha").src="Captcha_minidiskuze.php?a="+Math.floor(Math.random()*1000000000);
}

var array_smajlici=new Array(); // v sekcích komentáøe jsou smajlíci kvùli ajaxu generováni pomocí php
	array_smajlici[0]=["*OK*","<img src='s/24.gif'>","<img src='s/24.gif' title='*OK*'>"];
	array_smajlici[1]=["*LOVE*","<img src='s/19.gif'>","<img src='s/19.gif' title='*LOVE*'>"];
	array_smajlici[2]=["@@)","<img src='s/18.gif'>","<img src='s/18.gif' title='@@)'>"];
	array_smajlici[3]=["|@","<img src='s/10.gif'>","<img src='s/10.gif' title='|@'>"];
	array_smajlici[4]=[";)","<img src='s/3.gif'>","<img src='s/3.gif' title=';)'>"];
	array_smajlici[5]=[":))","<img src='s/5.gif'>","<img src='s/5.gif' title=':))'>"];
	array_smajlici[6]=[":~","<img src='s/6.gif'>","<img src='s/6.gif' title=':~'>"];
	array_smajlici[7]=["O:)","<img src='s/8.gif'>","<img src='s/8.gif' title='O:)'>"];
	array_smajlici[8]=[":((","<img src='s/12.gif'>","<img src='s/12.gif' title=':(('>"];
	array_smajlici[9]=[":D","<img src='s/14.gif'>","<img src='s/14.gif' title=':D'>"];
	array_smajlici[10]=[":O","<img src='s/16.gif'>","<img src='s/16.gif' title=':O'>"];
	array_smajlici[11]=["8)","<img src='s/17.gif'>","<img src='s/17.gif' title='8)'>"];
	array_smajlici[12]=[":P(","<img src='s/20.gif'>","<img src='s/20.gif' title=':P('>"];
	array_smajlici[13]=[":P","<img src='s/4.gif'>","<img src='s/4.gif' title=':P'>"];
	array_smajlici[14]=[":X(","<img src='s/21.gif'>","<img src='s/21.gif' title=':X('>"];
	array_smajlici[15]=[":X","<img src='s/11.gif'>","<img src='s/11.gif' title=':X'>"];
	array_smajlici[16]=["X(","<img src='s/13.gif'>","<img src='s/13.gif' title='X('>"];
	array_smajlici[17]=["|:)","<img src='s/22.gif'>","<img src='s/22.gif' title='|:)'>"];
	array_smajlici[18]=[":|","<img src='s/15.gif'>","<img src='s/15.gif' title=':|'>"];
	array_smajlici[19]=[":[","<img src='s/23.gif'>","<img src='s/23.gif' title=':['>"];
	array_smajlici[20]=[":-/","<img src='s/9.gif'>","<img src='s/9.gif' title=':/'>"];
	array_smajlici[21]=[":)","<img src='s/1.gif'>","<img src='s/1.gif' title=':)'>"];
	array_smajlici[22]=["::(","<img src='s/7.gif'>","<img src='s/7.gif' title='::('>"];
	array_smajlici[23]=[":(","<img src='s/2.gif'>","<img src='s/2.gif' title=':('>"];

function smajlici(text){ // v sekcích komentáøe a èlánky jsou smajlíci kvùli ajaxu generováni pomocí php ? poøád ? asi ne
	for(i=0;i<24;i++){
		while(text.indexOf(array_smajlici[i][0])!=(-1)){
		text=(text.replace(array_smajlici[i][0], array_smajlici[i][1]));
		}
	}
	for(i=0;i<24;i++){
		while(text.indexOf(array_smajlici[i][1])!=(-1)){
		text=(text.replace(array_smajlici[i][1], array_smajlici[i][2]));
		}
	}
	return text;
}

function smajliciKomentare(text_a_tagy){
	
	var zacatek='<div class="cmt_cmt">';
	var novy_text="";
	var usekni;
	while( text_a_tagy.indexOf(zacatek)!=(-1) ){
		usekni=text_a_tagy.indexOf(zacatek)+21;
		novy_text+=text_a_tagy.substring(0, usekni);
		text_a_tagy=text_a_tagy.substring(usekni);
		usekni=text_a_tagy.indexOf("</div>");
		novy_text+=smajlici(text_a_tagy.substring(0, usekni));
		text_a_tagy=text_a_tagy.substring(usekni);
	}
	novy_text+=text_a_tagy;
	return novy_text;	
}

function smajliciHlavni(text_a_tagy){
	
	var zacatek='<span class="clanek_datum">';
	var novy_text="";
	var usekni;
	if( text_a_tagy.indexOf(zacatek)!=(-1) ){
	
		usekni=text_a_tagy.indexOf(zacatek)+27;
		novy_text+=text_a_tagy.substring(0, usekni);
		
		text_a_tagy=text_a_tagy.substring(usekni);
		usekni=text_a_tagy.indexOf("<span class=zalozka_za_textem></span>");
		
		novy_text+=smajlici(text_a_tagy.substring(0, usekni));
		text_a_tagy=text_a_tagy.substring(usekni);
	}
	novy_text+=smajliciKomentare(text_a_tagy);
	return novy_text;	

}

function velikost_textu(velikost, test){
	doc.getElementById("div_clanek_text").style.fontSize=velikost+"px";
	includeAjax("clanek_velikost_textu.php?size="+velikost+"&a="+Math.random(), "clanek_velikost_textu");
}

pic1= new Image(); pic2= new Image(); pic3= new Image(); pic4= new Image(); pic5= new Image();
pic6= new Image(); pic7= new Image(); pic8= new Image(); pic9= new Image(); pic10= new Image();
pic11= new Image(); pic12= new Image(); pic13= new Image(); pic14= new Image(); pic15= new Image();
pic16= new Image(); pic17= new Image(); pic18= new Image(); pic19= new Image(); pic20= new Image();
pic21= new Image(); pic22= new Image(); pic23= new Image(); pic24= new Image(); pic25= new Image();
pic26= new Image(); pic27= new Image();pic28= new Image();pic29= new Image();

function prednacteni_menu(){
	pic1.src="design/menu"+language+"/foto_vse_a.png";
	pic2.src="design/menu"+language+"/foto_zavody_a.png";
	pic3.src="design/menu"+language+"/foto_soustredeni_a.png";
	pic4.src="design/menu"+language+"/foto_exhibice_a.png";
	pic5.src="design/menu"+language+"/foto_zkousky_a.png";
	pic6.src="design/menu"+language+"/foto_seminare_a.png";
	pic7.src="design/menu"+language+"/souteze_zavodnitym_a.png";
	pic8.src="design/menu"+language+"/souteze_zebricek_a.png";
	pic9.src="design/menu"+language+"/souteze_uspechy_a.png";
	pic10.src="design/menu"+language+"/taekwondo_historietkd_a.png";
	pic11.src="design/menu"+language+"/taekwondo_historievcr_a.png";
	pic12.src="design/menu"+language+"/taekwondo_choihonghi_a.png";
	pic13.src="design/menu"+language+"/vyuka_tuly_a.png";
	pic14.src="design/menu"+language+"/vyuka_techniky_a.png";
	pic15.src="design/menu"+language+"/kdojsme_onas_a.png";
	pic16.src="design/menu"+language+"/kdojsme_historiesonkal_a.png";
	pic17.src="design/menu"+language+"/kdojsme_cernepasky_a.png";
	pic18.src="design/menu"+language+"/kdecvicime_telocvicny_a.png";
	pic19.src="design/menu"+language+"/kdecvicime_kontakty_a.png";
	pic20.src="design/menu"+language+"/kdecvicime_nabor_a.png";
	pic21.src="design/menu"+language+"/odkazy_vsechny_a.png";
	pic22.src="design/menu"+language+"/odkazy_CR_a.png";
	pic23.src="design/menu"+language+"/odkazy_evropa_a.png";
	pic24.src="design/menu"+language+"/odkazy_asie_a.png";
	pic25.src="design/menu"+language+"/odkazy_severniamerika_a.png";
	pic26.src="design/menu"+language+"/odkazy_jizniamerika_a.png";
	pic27.src="design/menu"+language+"/odkazy_australieaoceanie_a.png";
	pic28.src="design/kal_left1.png";
	pic29.src="design/kal_right1.png";
}
// kalendar -->
function vyber_rok_a_mesic(cislo_mesice){
	var rok=doc.getElementById("kalendar_select_rok").value;
	includeAjax("kalendar.php?datum="+rok+"-"+cislo_mesice+"-01", "div_kalendar_sub");
}

// komentáøe -->
function cmt_change(id){
	obj=document.getElementById("cmt_cmt_hidden"+id);
	obj2=document.getElementById("cmt_cmt"+id);
	document.getElementById("cmt_info"+id).innerHTML="";
	obj_val=obj.innerHTML;
	while(obj_val.indexOf("<br>")!=(-1))
		obj_val=obj_val.replace("<br>","");
	obj2.innerHTML="<div class=d_edit_komentar><form action=# method=POST id=form_e_"+id+"><input type=hidden name=cmt_id_uprav id=cmt_id_uprav"+id+"><textarea id=cmt_id_uprav_textarea_"+id+" onKeyUp='zmena_pozice_kurzoru(this.id);' onClick='zmena_pozice_kurzoru( this.id);' class=cmt_tarea_e name=text>"+obj_val+"</textarea><br><img class=submit src='design/odeslat_2"+language+".png' onclick=\"document.getElementById('form_e_"+id+"').submit();\"></form>"+doc.getElementById("cmt_smajlici").innerHTML+"</div>";
	document.getElementById("cmt_id_uprav"+id).value=id;
}	
function smaz_komentar(ktery){
	if(confirm(language==""?"Opravdu smazat?":"Delete?"))
		document.getElementById(ktery).submit();
}
function zobraz_form_novy_komentar(){
	doc.getElementById("cmt_ta").style.height="80px";
	doc.getElementById("cmt_submit_new").style.display="block";
	doc.getElementById("cmt_smajlici").style.display="inline-block";
}

var cmt_id=0;
function prelouduj_div_hlavni(){// aby bylo po pøihlášení hned možnopsát komentáøe bez ruèního reloadu
	var article=""+document.location;
	var od=article.indexOf("article");
	if(od!=(-1)){
		article=article.substring(od, article.length);
		//includeAjaxReload("clanek.php?"+article, "div_hlavni");
		includeAjaxReload("komentare.php?cmt_id="+cmt_id, "komentare_main");
	}
}

	// AJAX behem loginu -->
		function includeAjaxReload(stranka, kam){
			var httpRequest;	
			if(typeof window.ActiveXObject != 'undefined'){
				httpRequest = new ActiveXObject("Microsoft.XMLHTTP");
			}else{  
				httpRequest = new XMLHttpRequest();
			}
			
			httpRequest.open("GET", stranka, true);
			httpRequest.onreadystatechange = function() {//Call a function when the state changes.
				if(httpRequest.readyState == 4 && httpRequest.status == 200) {
					doc.getElementById(kam).innerHTML=smajliciHlavni(httpRequest.responseText);
				}
			}
			httpRequest.send(null);
		}
	// <-- AJAX behem loginu

// <-- komentáøe



// pozice kurzoru (komentare, minidiskuze) -->
var textarea;
var pozice;
function vrat_pozici_kurzoru(textarea){
	//IE
	if(document.selection){
		textarea.focus();
		var Sel=document.selection.createRange();
		Sel.moveStart('character', -textarea.value.length);
		pozice=Sel.text.length;
	}
	// rozumne prohlizece
	else if(textarea.selectionStart || textarea.selectionStart == '0')
		pozice=textarea.selectionStart;
	return (pozice);
}
function vloz_na_pozici(co){
	var text=textarea.value;
	text2=text.substr(0, vrat_pozici_kurzoru(textarea))+co+text.substring(vrat_pozici_kurzoru(textarea), text.length);
	textarea.value=text2;
}
function zmena_pozice_kurzoru(id){
	textarea=document.getElementById(id);
}
function smazat_v_minidiskuzi(id){
	if(confirm(language==""?"Opravdu smazat?":"Delete?")){
		document.location="minidiskuze_text.php?delete="+id;
	}
}
function submit_edit_minidiskuze(){
	document.getElementById("form_minidiskuze").submit();
}
// <-- pozice kurzoru (komentare, minidiskuze)

function oknofoto(odkaz) {
	//options = 'height=100,width=100,top=0,left=0,scrollbars=no,resizable';
	options = 'fullscreen=yes, scrollbars=yes, resizable';
	window.open(odkaz, "oknofoto", options);
}

function video(pouto){
	document.location="index.php?video="+pouto;
}

/* LOGIN, nebo nìco na ten zpùsob */
function try_log_me_in(nick){
	if(document.getElementById("captcha_overeno")==null){
		includeAjax("captcha_kontrola.php?nick="+nick, "div_captcha");
		setTimeout('captcha_overeni();', 100);
	}else log_me_in();
}
function captcha_overeni(){
	if(document.getElementById("captcha_overeno")!=null){
		if(document.getElementById("captcha_netreba")!=null)
			log_me_in();
	}
	else setTimeout('captcha_overeni();', 100);
}

function log_me_in(){
	perm="";
	if(document.getElementById("trvale").checked)
		perm="&trvale=1";
	includeAjaxPost('login.php', 'log_jmeno='+document.getElementById('log_jmeno').value+'&log_heslo='+document.getElementById('log_heslo').value+'&log_captcha='+document.getElementById('log_captcha').value+perm, 'div_login_sub');
	try_reload();
	try_reload_minidiskuze();
}
function and_the_other_action(){
	includeAjaxPost('login.php', 'for_pwd2=1&log_email='+document.getElementById('log_email').value, 'div_login_sub');
}
function try_reload(){
	var znovu=1;
	if(document.getElementById("komentare_main")!=null){//jen kdyz je tam clanek se zapnutou diskuzi
		if(document.getElementById("hidden_ktery_relouduje")!=null){
			if (document.getElementById("hidden_ktery_relouduje").value==1){
				prelouduj_div_hlavni();
				document.getElementById("hidden_ktery_relouduje").value=0;
				znovu=0;
			}
		}
		if(znovu==1)setTimeout("try_reload();", 250);
	}
}
function try_reload_minidiskuze(){
	var znovu=1;
	if(document.getElementById("hidden_ktery_relouduje_2")!=null){
		if (document.getElementById("hidden_ktery_relouduje_2").value==1){
			window.frames["iframe_minidiskuze"].document.location="minidiskuze_text.php";
			doc.getElementById('d_minidiskuze_captcha').style.display='none';
			document.getElementById("hidden_ktery_relouduje_2").value=0;
			znovu=0;
		}
	}
	if(znovu==1)setTimeout("try_reload_minidiskuze();", 250);
}
function try_redir(){
	if(document.getElementById("login_redirect")!=null)
		if(document.getElementById("login_redirect").innerHTML=="1")
			inlcudeAjax("login.php", "div_login_sub");
	else
		setTimeout("try_redir();", 2000);
}
function reloaduj_captchu(){
	doc.getElementById("div_captcha").innerHTML="<img src=design/reload.png id=reload_captcha onClick=\"reloaduj_captchu();\"> <img src=CaptchaSecurityImages.php?a="+Math.floor(Math.random()*1000000)+" class=img_captcha><br>Captcha: <input type=text id=log_captcha class=input_log_captcha onkeydown=\"if(navigator.appName=='Microsoft Internet Explorer')if(event.keyCode==13) try_log_me_in();\" onkeypress=\"if(navigator.appName!='Microsoft Internet Explorer')if(event.keyCode==13) try_log_me_in();\"><input type=hidden id=captcha_overeno>";
}
/* LOGIN, nebo nìco na ten zpùsob */

/* REGISTRACE */
var casovac0;
var casovac1;
function casuj(reg_a){
	switch(reg_a){
		case 0:
			clearTimeout(casovac0);
			casovac0=setTimeout("if(document.getElementById('reg_nick').value.length>0)includeAjaxPost('registrace/kontrola.php', 'reg_nick_test='+document.getElementById('reg_nick').value+'&check_nick=1', 'reg_msg_nick');", 500);
			break;
		case 1:
			clearTimeout(casovac1);
			casovac1=setTimeout("if(document.getElementById('reg_mail').value.length>0)includeAjaxPost('registrace/kontrola.php', 'reg_mail_test='+document.getElementById('reg_mail').value+'&check_mail=1', 'reg_msg_mail');", 500);
			break;
	}
}
function reg_sc1(){
	if(document.getElementById('reg_nasu').value.length>2)
		document.getElementById('reg_msg_nasu').innerHTML='';
	else
		document.getElementById('reg_msg_nasu').innerHTML='Min. 3 znaky!';
}
function reg_sc2(){
	if(document.getElementById('reg_nick').value.length>2)
		casuj(0);
	else
		document.getElementById('reg_msg_nick').innerHTML='Min. 3 znaky!';
}
function reg_sc3(){
	if(document.getElementById('reg_mail').value.length>0)
		casuj(1);
	else
		document.getElementById('reg_msg_mail').innerHTML='';
}
function reg_sc4(){
	if(document.getElementById('reg_heslo1').value.length>5 && document.getElementById('reg_heslo2').value.length>5 && document.getElementById('reg_heslo1').value!=document.getElementById('reg_heslo2').value){
		document.getElementById('reg_msg_pwd').innerHTML='Hesla se liší!';
	}else if(document.getElementById('reg_heslo1').value.length>5 && document.getElementById('reg_heslo2').value.length>5){
		document.getElementById('reg_msg_pwd').innerHTML='';
	}else{
		document.getElementById('reg_msg_pwd').innerHTML='Min. 6 znakù!';
	}
}
function reg_sc5(){
	if(document.getElementById('reg_heslo1').value.length>5 && document.getElementById('reg_heslo2').value.length>5 && document.getElementById('reg_heslo1').value!=document.getElementById('reg_heslo2').value){
		document.getElementById('reg_msg_pwd').innerHTML='Hesla se liší!';
	}else if(document.getElementById('reg_heslo1').value.length>5 && document.getElementById('reg_heslo2').value.length>5){
		document.getElementById('reg_msg_pwd').innerHTML='';}else{document.getElementById('reg_msg_pwd').innerHTML='Min. 6 znakù!';
	}
}
function reg_sc6(){
	includeAjaxPost('registrace/registrace.php', 'p_reg_nasu='+document.getElementById('reg_nasu').value+'&p_reg_ni='+document.getElementById('reg_nick').value+'&p_reg_ma='+document.getElementById('reg_mail').value+'&p_reg_h1='+document.getElementById('reg_heslo1').value+'&p_reg_h2='+document.getElementById('reg_heslo2').value+'&p_reg_id='+(document.getElementById('reg_id').value.length==0 ? 0 : document.getElementById('reg_id').value)+'&p_reg_sonkalak='+document.getElementById('reg_sonkalak').value, 'div_hlavni');
}
function registrace_sonkalak(sonkalak){
	if(sonkalak==1){
		document.getElementById('puntik_ne').checked=0;
		document.getElementById('puntik_ano').checked=1;
		document.getElementById('puntik_rodic').checked=0;
		document.getElementById('cislo_prukazky').style.display='';
		document.getElementById('reg_sonkalak').value=1;
	}else if(sonkalak==2){
		document.getElementById('puntik_ne').checked=0;
		document.getElementById('puntik_ano').checked=0;
		document.getElementById('puntik_rodic').checked=1;
		document.getElementById('cislo_prukazky').style.display='';
		document.getElementById('reg_sonkalak').value=2;
	}else{
		document.getElementById('puntik_ne').checked=1;
		document.getElementById('puntik_ano').checked=0;
		document.getElementById('puntik_rodic').checked=0;
		document.getElementById('cislo_prukazky').style.display='none';
		document.getElementById('reg_id').value='';
		document.getElementById('reg_sonkalak').value=0;
	}
}
/* REGISTRACE */

/* fotolist --> */

line=0;
line_focus=1;
barva1="#49b0ff";
barva2="lightBlue";
barva3="yellow";
lide_vyber=new Array;

hledej_v_aktivnich=1;
function aktivni_vs_pasivni_hledani(){
	if(hledej_v_aktivnich==1){
		hledej_v_aktivnich=0;
		doc.getElementById("input_aktivni_pasivni").value='Pasivní';
	}else{
		hledej_v_aktivnich=1;
		doc.getElementById("input_aktivni_pasivni").value='Aktivní';
	}
	psani(11111111111);//nesmyslna klavesa
	doc.getElementById("input_kategorie").focus();
}

function psani(klavesa){
	if(klavesa==38)up();
	else if(klavesa==40)down();
	else if(klavesa==13){
		if(doc.getElementById("listlide_edit").innerHTML!=""){
			doc.getElementById("input_idlid").value=(lide_vyber[line_focus][0]);
			doc.getElementById("listlide_vstup").value=(lide_vyber[line_focus][1]);
			//doc.getElementById("input_jmeno").value=(lide_vyber[line_focus][4]);
			//doc.getElementById("input_stupen").value=(lide_vyber[line_focus][5]);
			//doc.getElementById("submit_vloz").focus();
		}else if(doc.getElementById("listlide_vstup").value!=""){
			alert("Neznámé jméno!");
		}
		//doc.getElementById("listlide_vstup").value="";
		doc.getElementById("listlide_edit").innerHTML="";
	}
	else if(klavesa==27){
		//doc.getElementById("listlide_vstup").value="";
		doc.getElementById("listlide_edit").innerHTML="";
	}
	else{
		hledam=doc.getElementById("listlide_vstup").value;
		hledam=hledam.toLowerCase(); 
		line=0;
		line_focus=1;
		vyber="";
		if(hledam!=""){
			for(i=0;i<lide_pocet;i++){
				je_tam=(lide[i][1].toLowerCase().indexOf(hledam));
				if(
					(je_tam!=(-1))
					&&
					(
						( (lide[i][2]=='true')&&(hledej_v_aktivnich==1) )
						||
						(hledej_v_aktivnich==0)
					)
				){
					line++;
					(
					vyber+="<div id=line_"+line+" class=line_x onClick='jmeno_click("+line+");' onMouseOver='this.style.textDecoration=\"underline\"'; onMouseOut='this.style.textDecoration=\"none\"';>"+lide[i][1].substr(0, je_tam)+"<span class=line_x_bold>"+lide[i][1].substr(je_tam, hledam.length)+"</span>"+lide[i][1].substr(je_tam+hledam.length)+"<br></div>"
					);
					lide_vyber[line]=lide[i];
				}
			}
			doc.getElementById("listlide_edit").innerHTML=vyber;
			doc.getElementById("line_1").style.backgroundColor=barva1;
		}else doc.getElementById("listlide_edit").innerHTML="";
	}	
}
function up(){
	if(line_focus>1){
		line_focus--;
		doc.getElementById("line_"+(line_focus+1)).style.backgroundColor=barva2;
		doc.getElementById("line_"+line_focus).style.backgroundColor=barva1;
	}else{
		line_focus=line;
		doc.getElementById("line_1").style.backgroundColor=barva2;
		doc.getElementById("line_"+line_focus).style.backgroundColor=barva1;
	}
}
function down(){
	if(line_focus<line){
		line_focus++;
		doc.getElementById("line_"+(line_focus-1)).style.backgroundColor=barva2;
		doc.getElementById("line_"+line_focus).style.backgroundColor=barva1;
	}else{
		line_focus=1;
		doc.getElementById("line_"+line).style.backgroundColor=barva2;
		doc.getElementById("line_1").style.backgroundColor=barva1;
	}
}
function jmeno_click(line){
	doc.getElementById("input_idlid").value=(lide_vyber[line][0]);
	doc.getElementById("listlide_vstup").value=(lide_vyber[line][1]);
	doc.getElementById("listlide_edit").innerHTML="";
}

/* <-- fotolist */

/*anketa --> */
function trycrosses(i){
	obj=document.getElementById("ank_buffer");
	pole=obj.innerHTML.split("#");
	if(pole.length==i){
		obj.innerHTML="Hlas zapoèten.";
		if(language=="")
			document.getElementById("div_novote").innerHTML="Hlas zapoèten.";
		else document.getElementById("div_novote").innerHTML="Voice counted.";
		sum=0;
		for(j=0;j<i;j++)
			sum+=pole[j]*1;
		for(j=0;j<i;j++){
			document.getElementById("ank_span_"+j).innerHTML="("+pole[j]+")";
			document.getElementById("ank_div_front_"+j).style.width=Math.round(248*pole[j]/(sum==0 ? 1 : sum))+"px";
		}
		divs=document.getElementsByTagName("div");
		for(j=0;j<divs.length;j++){
			if(divs[j].className=="ank_div")
				divs[j].className="ank_div_noh";
		}
	}else{
		setTimeout("trycrosses("+i+");", 250);
	}
}
/*anketa <-- */
/*dalsi nastaveni -->*/
function Zrus_Notifikaci(arg){
	if(arg)
		document.getElementById("addsetup_green").innerHTML="<br>";
	else
		setTimeout("Zrus_Notifikaci(1);", 2500);
}
/*dalsi nastaveni <--*/

// video counter -->
function videodown(arg2){
	if(document.getElementById("d_hidden"+arg2).innerHTML==""){
		window.location.replace(document.getElementById("a_hidden"+arg2).href);
	}else{
		setTimeout("videodown("+arg2+");", 200);
	}
}
function videocntr(arg, arg2){
	document.getElementById("d_hidden"+arg2).innerHTML="#####";
	setTimeout("videodown("+arg2+");", 200);
	includeAjaxPostO("video.php", "down="+arg, arg2);
}
// <- video counter

function load(){ // je zarazeno v layoutu (probìhne jeste pøed naètením celého dokumentu)
	doc=window.document;
	prednacteni_menu();
	if(zmen_menu!="")menu(zmen_menu);
	if(zmen_podmenu!="")podmenu(zmen_podmenu);
}