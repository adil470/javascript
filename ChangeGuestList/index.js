let guestList = ["Mohsin", "Amir", "Adil"];
var name = guestList[0];
document.write(`${name} please come to dinner` + "<br/>");
name = guestList[1];
document.write(`${name} please come to dinner` + "<br/>");
name = guestList[2];
document.write(`${name} please come to dinner` + "<hr/>");
document.write(` <b>Who Can't Make Dinner</b> :` + "<hr/>");


for (let i = 0; i < guestList.length; i++) {
    if (guestList[i] === "Amir") {
        document.write(`${guestList[i]} can't make it` + "<hr/>")
    }
}

document.write(` <b>Updated Listed New Person Invite</b> :` + "<hr/>");
guestList[1] = "Muhammad Ali";

var name = guestList[0];
document.write(`${name} please come to dinner` + "<br/>");
name = guestList[1];
document.write(`${name} please come to dinner` + "<br/>");
name = guestList[2];
document.write(`${name} please come to dinner`);