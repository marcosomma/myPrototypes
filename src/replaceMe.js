/**
 * Created by iMak on 19/03/15.
 */

module.exports = {
    /* istanbul ignore next */
    eHtml: function (html) {
        return String(html).replace(/&/g ,"&#38;")
            .replace(/™/g ,"&#8482;")
            .replace(/€/g ,"&euro;")
            .replace(/!/g ,"&#33;")
            .replace(/"/g ,"&#34;")
            .replace(/\$/g ,"&#36;")
            .replace(/%/g ,"&#37;")
            .replace(/'/g ,"&#39;")
            .replace(/\(/g ,"&#40;")
            .replace(/\)/g ,"&#41;")
            .replace(/\*/g ,"&#42;")
            .replace(/\+/g ,"&#43;")
            .replace(/,/g ,"&#44;")
            .replace(/-/g ,"&#45;")
            .replace(/\./g ,"&#46;")
            .replace(/\//g ,"&#47;")
            .replace(/</g ,"&#60;")
            .replace(/=/g ,"&#61;")
            .replace(/>/g ,"&#62;")
            .replace(/\?/g ,"&#63;")
            .replace(/@/g ,"&#64;")
            .replace(/\{/g ,"&#123;")
            .replace(/\|/g ,"&#124;")
            .replace(/}/g ,"&#125;")
            .replace(/~/g ,"&#126;")
            .replace(/¡/g ,"&#161;")
            .replace(/¢/g ,"&#162;")
            .replace(/£/g ,"&#163;")
            .replace(/¤/g ,"&#164;")
            .replace(/¥/g ,"&#165;")
            .replace(/¦/g ,"&#166;")
            .replace(/§/g ,"&#167;")
            .replace(/¨/g ,"&#168;")
            .replace(/©/g ,"&#169;")
            .replace(/ª/g ,"&#170;")
            .replace(/«/g ,"&#171;")
            .replace(/¬/g ,"&#172;")
            .replace(/®/g ,"&#174;")
            .replace(/¯/g ,"&#175;")
            .replace(/°/g ,"&#176;")
            .replace(/±/g ,"&#177;")
            .replace(/²/g ,"&#178;")
            .replace(/³/g ,"&#179;")
            .replace(/´/g ,"&#180;")
            .replace(/µ/g ,"&#181;")
            .replace(/¶/g ,"&#182;")
            .replace(/·/g ,"&#183;")
            .replace(/¸/g ,"&#184;")
            .replace(/¹/g ,"&#185;")
            .replace(/º/g ,"&#186;")
            .replace(/»/g ,"&#187;")
            .replace(/¼/g ,"&#188;")
            .replace(/½/g ,"&#189;")
            .replace(/¾/g ,"&#190;")
            .replace(/¿/g ,"&#191;")
            .replace(/À/g ,"&#192;")
            .replace(/Á/g ,"&#193;")
            .replace(/Â/g ,"&#194;")
            .replace(/Ã/g ,"&#195;")
            .replace(/Ä/g ,"&#196;")
            .replace(/Å/g ,"&#197;")
            .replace(/Æ/g ,"&#198;")
            .replace(/Ç/g ,"&#199;")
            .replace(/È/g ,"&#200;")
            .replace(/É/g ,"&#201;")
            .replace(/Ê/g ,"&#202;")
            .replace(/Ë/g ,"&#203;")
            .replace(/Ì/g ,"&#204;")
            .replace(/Í/g ,"&#205;")
            .replace(/Î/g ,"&#206;")
            .replace(/Ï/g ,"&#207;")
            .replace(/Ð/g ,"&#208;")
            .replace(/Ñ/g ,"&#209;")
            .replace(/Ò/g ,"&#210;")
            .replace(/Ó/g ,"&#211;")
            .replace(/Ô/g ,"&#212;")
            .replace(/Õ/g ,"&#213;")
            .replace(/Ö/g ,"&#214;")
            .replace(/×/g ,"&#215;")
            .replace(/Ø/g ,"&#216;")
            .replace(/Ù/g ,"&#217;")
            .replace(/Ú/g ,"&#218;")
            .replace(/Û/g ,"&#219;")
            .replace(/Ü/g ,"&#220;")
            .replace(/Ý/g ,"&#221;")
            .replace(/Þ/g ,"&#222;")
            .replace(/ß/g ,"&#223;")
            .replace(/à/g ,"&#224;")
            .replace(/á/g ,"&#225;")
            .replace(/â/g ,"&#226;")
            .replace(/ã/g ,"&#227;")
            .replace(/ä/g ,"&#228;")
            .replace(/å/g ,"&#229;")
            .replace(/æ/g ,"&#230;")
            .replace(/ç/g ,"&#231;")
            .replace(/è/g ,"&#232;")
            .replace(/é/g ,"&#233;")
            .replace(/ê/g ,"&#234;")
            .replace(/ë/g ,"&#235;")
            .replace(/ì/g ,"&#236;")
            .replace(/í/g ,"&#237;")
            .replace(/î/g ,"&#238;")
            .replace(/ï/g ,"&#239;")
            .replace(/ð/g ,"&#240;")
            .replace(/ñ/g ,"&#241;")
            .replace(/ò/g ,"&#242;")
            .replace(/ó/g ,"&#243;")
            .replace(/ô/g ,"&#244;")
            .replace(/õ/g ,"&#245;")
            .replace(/ö/g ,"&#246;")
            .replace(/÷/g ,"&#247;")
            .replace(/ø/g ,"&#248;")
            .replace(/ù/g ,"&#249;")
            .replace(/ú/g ,"&#250;")
            .replace(/û/g ,"&#251;")
            .replace(/ü/g ,"&#252;")
            .replace(/ý/g ,"&#253;")
            .replace(/þ/g ,"&#254;")
            .replace(/ÿ/g ,"&#255;")
            .replace(/Ā/g ,"&#256;")
            .replace(/ā/g ,"&#257;")
            .replace(/Ă/g ,"&#258;")
            .replace(/ă/g ,"&#259;")
            .replace(/Ą/g ,"&#260;")
            .replace(/ą/g ,"&#261;")
            .replace(/Ć/g ,"&#262;")
            .replace(/ć/g ,"&#263;")
            .replace(/Ĉ/g ,"&#264;")
            .replace(/ĉ/g ,"&#265;")
            .replace(/Ċ/g ,"&#266;")
            .replace(/ċ/g ,"&#267;")
            .replace(/Č/g ,"&#268;")
            .replace(/č/g ,"&#269;")
            .replace(/Ď/g ,"&#270;")
            .replace(/ď/g ,"&#271;")
            .replace(/Đ/g ,"&#272;")
            .replace(/đ/g ,"&#273;")
            .replace(/Ē/g ,"&#274;")
            .replace(/ē/g ,"&#275;")
            .replace(/Ĕ/g ,"&#276;")
            .replace(/ĕ/g ,"&#277;")
            .replace(/Ė/g ,"&#278;")
            .replace(/ė/g ,"&#279;")
            .replace(/Ę/g ,"&#280;")
            .replace(/ę/g ,"&#281;")
            .replace(/Ě/g ,"&#282;")
            .replace(/ě/g ,"&#283;")
            .replace(/Ĝ/g ,"&#284;")
            .replace(/ĝ/g ,"&#285;")
            .replace(/Ğ/g ,"&#286;")
            .replace(/ğ/g ,"&#287;")
            .replace(/Ġ/g ,"&#288;")
            .replace(/ġ/g ,"&#289;")
            .replace(/Ģ/g ,"&#290;")
            .replace(/ģ/g ,"&#291;")
            .replace(/Ĥ/g ,"&#292;")
            .replace(/ĥ/g ,"&#293;")
            .replace(/Ħ/g ,"&#294;")
            .replace(/ħ/g ,"&#295;")
            .replace(/Ĩ/g ,"&#296;")
            .replace(/ĩ/g ,"&#297;")
            .replace(/Ī/g ,"&#298;")
            .replace(/ī/g ,"&#299;")
            .replace(/Ĭ/g ,"&#300;")
            .replace(/ĭ/g ,"&#301;")
            .replace(/Į/g ,"&#302;")
            .replace(/į/g ,"&#303;")
            .replace(/İ/g ,"&#304;")
            .replace(/ı/g ,"&#305;")
            .replace(/Ĳ/g ,"&#306;")
            .replace(/ĳ/g ,"&#307;")
            .replace(/Ĵ/g ,"&#308;")
            .replace(/ĵ/g ,"&#309;")
            .replace(/Ķ/g ,"&#310;")
            .replace(/ķ/g ,"&#311;")
            .replace(/ĸ/g ,"&#312;")
            .replace(/Ĺ/g ,"&#313;")
            .replace(/ĺ/g ,"&#314;")
            .replace(/Ļ/g ,"&#315;")
            .replace(/ļ/g ,"&#316;")
            .replace(/Ľ/g ,"&#317;")
            .replace(/ľ/g ,"&#318;")
            .replace(/Ŀ/g ,"&#319;")
            .replace(/ŀ/g ,"&#320;")
            .replace(/Ł/g ,"&#321;")
            .replace(/ł/g ,"&#322;")
            .replace(/Ń/g ,"&#323;")
            .replace(/ń/g ,"&#324;")
            .replace(/Ņ/g ,"&#325;")
            .replace(/ņ/g ,"&#326;")
            .replace(/Ň/g ,"&#327;")
            .replace(/ň/g ,"&#328;")
            .replace(/ŉ/g ,"&#329;")
            .replace(/Ŋ/g ,"&#330;")
            .replace(/ŋ/g ,"&#331;")
            .replace(/Ō/g ,"&#332;")
            .replace(/ō/g ,"&#333;")
            .replace(/Ŏ/g ,"&#334;")
            .replace(/ŏ/g ,"&#335;")
            .replace(/Ő/g ,"&#336;")
            .replace(/ő/g ,"&#337;")
            .replace(/Œ/g ,"&#338;")
            .replace(/œ/g ,"&#339;")
            .replace(/Ŕ/g ,"&#340;")
            .replace(/ŕ/g ,"&#341;")
            .replace(/Ŗ/g ,"&#342;")
            .replace(/ŗ/g ,"&#343;")
            .replace(/Ř/g ,"&#344;")
            .replace(/ř/g ,"&#345;")
            .replace(/Ś/g ,"&#346;")
            .replace(/ś/g ,"&#347;")
            .replace(/Ŝ/g ,"&#348;")
            .replace(/ŝ/g ,"&#349;")
            .replace(/Ş/g ,"&#350;")
            .replace(/ş/g ,"&#351;")
            .replace(/Š/g ,"&#352;")
            .replace(/š/g ,"&#353;")
            .replace(/Ţ/g ,"&#354;")
            .replace(/ţ/g ,"&#355;")
            .replace(/Ť/g ,"&#356;")
            .replace(/ť/g ,"&#357;")
            .replace(/Ŧ/g ,"&#358;")
            .replace(/ŧ/g ,"&#359;")
            .replace(/Ũ/g ,"&#360;")
            .replace(/ũ/g ,"&#361;")
            .replace(/Ū/g ,"&#362;")
            .replace(/ū/g ,"&#363;")
            .replace(/Ŭ/g ,"&#364;")
            .replace(/ŭ/g ,"&#365;")
            .replace(/Ů/g ,"&#366;")
            .replace(/ů/g ,"&#367;")
            .replace(/Ű/g ,"&#368;")
            .replace(/ű/g ,"&#369;")
            .replace(/Ų/g ,"&#370;")
            .replace(/ų/g ,"&#371;")
            .replace(/Ŵ/g ,"&#372;")
            .replace(/ŵ/g ,"&#373;")
            .replace(/Ŷ/g ,"&#374;")
            .replace(/ŷ/g ,"&#375;")
            .replace(/Ÿ/g ,"&#376;")
            .replace(/Ź/g ,"&#377;")
            .replace(/ź/g ,"&#378;")
            .replace(/Ż/g ,"&#379;")
            .replace(/ż/g ,"&#380;")
            .replace(/Ž/g ,"&#381;")
            .replace(/ž/g ,"&#382;")
            .replace(/ſ/g ,"&#383;")
            .replace(/Ŕ/g ,"&#340;")
            .replace(/ŕ/g ,"&#341;")
            .replace(/Ŗ/g ,"&#342;")
            .replace(/ŗ/g ,"&#343;")
            .replace(/Ř/g ,"&#344;")
            .replace(/ř/g ,"&#345;")
            .replace(/Ś/g ,"&#346;")
            .replace(/ś/g ,"&#347;")
            .replace(/Ŝ/g ,"&#348;")
            .replace(/ŝ/g ,"&#349;")
            .replace(/Ş/g ,"&#350;")
            .replace(/ş/g ,"&#351;")
            .replace(/Š/g ,"&#352;")
            .replace(/š/g ,"&#353;")
            .replace(/Ţ/g ,"&#354;")
            .replace(/ţ/g ,"&#355;")
            .replace(/Ť/g ,"&#356;")
            .replace(/ť/g ,"&#577;")
            .replace(/Ŧ/g ,"&#358;")
            .replace(/ŧ/g ,"&#359;")
            .replace(/Ũ/g ,"&#360;")
            .replace(/ũ/g ,"&#361;")
            .replace(/Ū/g ,"&#362;")
            .replace(/ū/g ,"&#363;")
            .replace(/Ŭ/g ,"&#364;")
            .replace(/ŭ/g ,"&#365;")
            .replace(/Ů/g ,"&#366;")
            .replace(/ů/g ,"&#367;")
            .replace(/Ű/g ,"&#368;")
            .replace(/ű/g ,"&#369;")
            .replace(/Ų/g ,"&#370;")
            .replace(/ų/g ,"&#371;")
            .replace(/Ŵ/g ,"&#372;")
            .replace(/ŵ/g ,"&#373;")
            .replace(/Ŷ/g ,"&#374;")
            .replace(/ŷ/g ,"&#375;")
            .replace(/Ÿ/g ,"&#376;")
            .replace(/Ź/g ,"&#377;")
            .replace(/ź/g ,"&#378;")
            .replace(/Ż/g ,"&#379;")
            .replace(/ż/g ,"&#380;")
            .replace(/Ž/g ,"&#381;")
            .replace(/ž/g ,"&#382;")
            .replace(/ſ/g ,"&#383;");
    },
    uHtml: function (html) {
        return String(html).replace(/&#8482;/g , "™")
            .replace(/&euro;/g , "€")
            .replace(/&#33;/g , "!")
            .replace(/&#34;/g , '"')
            .replace(/&#36;/g , "$")
            .replace(/&#37;/g , "%")
            .replace(/&#39;/g , "'")
            .replace(/&#40;/g , "(")
            .replace(/&#41;/g , ")")
            .replace(/&#42;/g , "*")
            .replace(/&#43;/g , "+")
            .replace(/&#44;/g , ",")
            .replace(/&#45;/g , "-")
            .replace(/&#46;/g , ".")
            .replace(/&#47;/g , "/")
            .replace(/&#60;/g , "<")
            .replace(/&#61;/g , "=")
            .replace(/&#62;/g , ">")
            .replace(/&#63;/g , "?")
            .replace(/&#64;/g , "@")
            .replace(/&#123;/g , "{")
            .replace(/&#124;/g , "|")
            .replace(/&#125;/g , "}")
            .replace(/&#126;/g , "~")
            .replace(/&#161;/g , "¡")
            .replace(/&#162;/g , "¢")
            .replace(/&#163;/g , "£")
            .replace(/&#164;/g , "¤")
            .replace(/&#165;/g , "¥")
            .replace(/&#166;/g , "¦")
            .replace(/&#167;/g , "§")
            .replace(/&#168;/g , "¨")
            .replace(/&#169;/g , "©")
            .replace(/&#170;/g , "ª")
            .replace(/&#171;/g , "«")
            .replace(/&#172;/g , "¬")
            .replace(/&#174;/g , "®")
            .replace(/&#175;/g , "¯")
            .replace(/&#176;/g , "°")
            .replace(/&#177;/g , "±")
            .replace(/&#178;/g , "²")
            .replace(/&#179;/g , "³")
            .replace(/&#180;/g , "´")
            .replace(/&#181;/g , "µ")
            .replace(/&#182;/g , "¶")
            .replace(/&#183;/g , "·")
            .replace(/&#184;/g , "¸")
            .replace(/&#185;/g , "¹")
            .replace(/&#186;/g , "º")
            .replace(/&#187;/g , "»")
            .replace(/&#188;/g , "¼")
            .replace(/&#189;/g , "½")
            .replace(/&#190;/g , "¾")
            .replace(/&#191;/g , "¿")
            .replace(/&#192;/g , "À")
            .replace(/&#193;/g , "Á")
            .replace(/&#194;/g , "Â")
            .replace(/&#195;/g , "Ã")
            .replace(/&#196;/g , "Ä")
            .replace(/&#197;/g , "Å")
            .replace(/&#198;/g , "Æ")
            .replace(/&#199;/g , "Ç")
            .replace(/&#200;/g , "È")
            .replace(/&#201;/g , "É")
            .replace(/&#202;/g , "Ê")
            .replace(/&#203;/g , "Ë")
            .replace(/&#204;/g , "Ì")
            .replace(/&#205;/g , "Í")
            .replace(/&#206;/g , "Î")
            .replace(/&#207;/g , "Ï")
            .replace(/&#208;/g , "Ð")
            .replace(/&#209;/g , "Ñ")
            .replace(/&#210;/g , "Ò")
            .replace(/&#211;/g , "Ó")
            .replace(/&#212;/g , "Ô")
            .replace(/&#213;/g , "Õ")
            .replace(/&#214;/g , "Ö")
            .replace(/&#215;/g , "×")
            .replace(/&#216;/g , "Ø")
            .replace(/&#217;/g , "Ù")
            .replace(/&#218;/g , "Ú")
            .replace(/&#219;/g , "Û")
            .replace(/&#220;/g , "Ü")
            .replace(/&#221;/g , "Ý")
            .replace(/&#222;/g , "Þ")
            .replace(/&#223;/g , "ß")
            .replace(/&#224;/g , "à")
            .replace(/&#225;/g , "á")
            .replace(/&#226;/g , "â")
            .replace(/&#227;/g , "ã")
            .replace(/&#228;/g , "ä")
            .replace(/&#229;/g , "å")
            .replace(/&#230;/g , "æ")
            .replace(/&#231;/g , "ç")
            .replace(/&#232;/g , "è")
            .replace(/&#233;/g , "é")
            .replace(/&#234;/g , "ê")
            .replace(/&#235;/g , "ë")
            .replace(/&#236;/g , "ì")
            .replace(/&#237;/g , "í")
            .replace(/&#238;/g , "î")
            .replace(/&#239;/g , "ï")
            .replace(/&#240;/g , "ð")
            .replace(/&#241;/g , "ñ")
            .replace(/&#242;/g , "ò")
            .replace(/&#243;/g , "ó")
            .replace(/&#244;/g , "ô")
            .replace(/&#245;/g , "õ")
            .replace(/&#246;/g , "ö")
            .replace(/&#247;/g , "÷")
            .replace(/&#248;/g , "ø")
            .replace(/&#249;/g , "ù")
            .replace(/&#250;/g , "ú")
            .replace(/&#251;/g , "û")
            .replace(/&#252;/g , "ü")
            .replace(/&#253;/g , "ý")
            .replace(/&#254;/g , "þ")
            .replace(/&#255;/g , "ÿ")
            .replace(/&#256;/g , "Ā")
            .replace(/&#257;/g , "ā")
            .replace(/&#258;/g , "Ă")
            .replace(/&#259;/g , "ă")
            .replace(/&#260;/g , "Ą")
            .replace(/&#261;/g , "ą")
            .replace(/&#262;/g , "Ć")
            .replace(/&#263;/g , "ć")
            .replace(/&#264;/g , "Ĉ")
            .replace(/&#265;/g , "ĉ")
            .replace(/&#266;/g , "Ċ")
            .replace(/&#267;/g , "ċ")
            .replace(/&#268;/g , "Č")
            .replace(/&#269;/g , "č")
            .replace(/&#270;/g , "Ď")
            .replace(/&#271;/g , "ď")
            .replace(/&#272;/g , "Đ")
            .replace(/&#273;/g , "đ")
            .replace(/&#274;/g , "Ē")
            .replace(/&#275;/g , "ē")
            .replace(/&#276;/g , "Ĕ")
            .replace(/&#277;/g , "ĕ")
            .replace(/&#278;/g , "Ė")
            .replace(/&#279;/g , "ė")
            .replace(/&#280;/g , "Ę")
            .replace(/&#281;/g , "ę")
            .replace(/&#282;/g , "Ě")
            .replace(/&#283;/g , "ě")
            .replace(/&#284;/g , "Ĝ")
            .replace(/&#285;/g , "ĝ")
            .replace(/&#286;/g , "Ğ")
            .replace(/&#287;/g , "ğ")
            .replace(/&#288;/g , "Ġ")
            .replace(/&#289;/g , "ġ")
            .replace(/&#290;/g , "Ģ")
            .replace(/&#291;/g , "ģ")
            .replace(/&#292;/g , "Ĥ")
            .replace(/&#293;/g , "ĥ")
            .replace(/&#294;/g , "Ħ")
            .replace(/&#295;/g , "ħ")
            .replace(/&#296;/g , "Ĩ")
            .replace(/&#297;/g , "ĩ")
            .replace(/&#298;/g , "Ī")
            .replace(/&#299;/g , "ī")
            .replace(/&#300;/g , "Ĭ")
            .replace(/&#301;/g , "ĭ")
            .replace(/&#302;/g , "Į")
            .replace(/&#303;/g , "į")
            .replace(/&#304;/g , "İ")
            .replace(/&#305;/g , "ı")
            .replace(/&#306;/g , "Ĳ")
            .replace(/&#307;/g , "ĳ")
            .replace(/&#308;/g , "Ĵ")
            .replace(/&#309;/g , "ĵ")
            .replace(/&#310;/g , "Ķ")
            .replace(/&#311;/g , "ķ")
            .replace(/&#312;/g , "ĸ")
            .replace(/&#313;/g , "Ĺ")
            .replace(/&#314;/g , "ĺ")
            .replace(/&#315;/g , "Ļ")
            .replace(/&#316;/g , "ļ")
            .replace(/&#317;/g , "Ľ")
            .replace(/&#318;/g , "ľ")
            .replace(/&#319;/g , "Ŀ")
            .replace(/&#320;/g , "ŀ")
            .replace(/&#321;/g , "Ł")
            .replace(/&#322;/g , "ł")
            .replace(/&#323;/g , "Ń")
            .replace(/&#324;/g , "ń")
            .replace(/&#325;/g , "Ņ")
            .replace(/&#326;/g , "ņ")
            .replace(/&#327;/g , "Ň")
            .replace(/&#328;/g , "ň")
            .replace(/&#329;/g , "ŉ")
            .replace(/&#330;/g , "Ŋ")
            .replace(/&#331;/g , "ŋ")
            .replace(/&#332;/g , "Ō")
            .replace(/&#333;/g , "ō")
            .replace(/&#334;/g , "Ŏ")
            .replace(/&#335;/g , "ŏ")
            .replace(/&#336;/g , "Ő")
            .replace(/&#337;/g , "ő")
            .replace(/&#338;/g , "Œ")
            .replace(/&#339;/g , "œ")
            .replace(/&#340;/g , "Ŕ")
            .replace(/&#341;/g , "ŕ")
            .replace(/&#342;/g , "Ŗ")
            .replace(/&#343;/g , "ŗ")
            .replace(/&#344;/g , "Ř")
            .replace(/&#345;/g , "ř")
            .replace(/&#346;/g , "Ś")
            .replace(/&#347;/g , "ś")
            .replace(/&#348;/g , "Ŝ")
            .replace(/&#349;/g , "ŝ")
            .replace(/&#350;/g , "Ş")
            .replace(/&#351;/g , "ş")
            .replace(/&#352;/g , "Š")
            .replace(/&#353;/g , "š")
            .replace(/&#354;/g , "Ţ")
            .replace(/&#355;/g , "ţ")
            .replace(/&#356;/g , "Ť")
            .replace(/&#357;/g , "ť")
            .replace(/&#358;/g , "Ŧ")
            .replace(/&#359;/g , "ŧ")
            .replace(/&#360;/g , "Ũ")
            .replace(/&#361;/g , "ũ")
            .replace(/&#362;/g , "Ū")
            .replace(/&#363;/g , "ū")
            .replace(/&#364;/g , "Ŭ")
            .replace(/&#365;/g , "ŭ")
            .replace(/&#366;/g , "Ů")
            .replace(/&#367;/g , "ů")
            .replace(/&#368;/g , "Ű")
            .replace(/&#369;/g , "ű")
            .replace(/&#370;/g , "Ų")
            .replace(/&#371;/g , "ų")
            .replace(/&#372;/g , "Ŵ")
            .replace(/&#373;/g , "ŵ")
            .replace(/&#374;/g , "Ŷ")
            .replace(/&#375;/g , "ŷ")
            .replace(/&#376;/g , "Ÿ")
            .replace(/&#377;/g , "Ź")
            .replace(/&#378;/g , "ź")
            .replace(/&#379;/g , "Ż")
            .replace(/&#380;/g , "ż")
            .replace(/&#381;/g , "Ž")
            .replace(/&#382;/g , "ž")
            .replace(/&#383;/g , "ſ")
            .replace(/&#340;/g , "Ŕ")
            .replace(/&#341;/g , "ŕ")
            .replace(/&#342;/g , "Ŗ")
            .replace(/&#343;/g , "ŗ")
            .replace(/&#344;/g , "Ř")
            .replace(/&#345;/g , "ř")
            .replace(/&#346;/g , "Ś")
            .replace(/&#347;/g , "ś")
            .replace(/&#348;/g , "Ŝ")
            .replace(/&#349;/g , "ŝ")
            .replace(/&#350;/g , "Ş")
            .replace(/&#351;/g , "ş")
            .replace(/&#352;/g , "Š")
            .replace(/&#353;/g , "š")
            .replace(/&#354;/g , "Ţ")
            .replace(/&#355;/g , "ţ")
            .replace(/&#356;/g , "Ť")
            .replace(/&#577;/g , "ť")
            .replace(/&#358;/g , "Ŧ")
            .replace(/&#359;/g , "ŧ")
            .replace(/&#360;/g , "Ũ")
            .replace(/&#361;/g , "ũ")
            .replace(/&#362;/g , "Ū")
            .replace(/&#363;/g , "ū")
            .replace(/&#364;/g , "Ŭ")
            .replace(/&#365;/g , "ŭ")
            .replace(/&#366;/g , "Ů")
            .replace(/&#367;/g , "ů")
            .replace(/&#368;/g , "Ű")
            .replace(/&#369;/g , "ű")
            .replace(/&#370;/g , "Ų")
            .replace(/&#371;/g , "ų")
            .replace(/&#372;/g , "Ŵ")
            .replace(/&#373;/g , "ŵ")
            .replace(/&#374;/g , "Ŷ")
            .replace(/&#375;/g , "ŷ")
            .replace(/&#376;/g , "Ÿ")
            .replace(/&#377;/g , "Ź")
            .replace(/&#378;/g , "ź")
            .replace(/&#379;/g , "Ż")
            .replace(/&#380;/g , "ż")
            .replace(/&#381;/g , "Ž")
            .replace(/&#382;/g , "ž")
            .replace(/&#383;/g , "ſ")
            .replace(/&#38;/g , "&")
    }
}