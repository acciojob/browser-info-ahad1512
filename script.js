const div = document.createElement("div");
div.id = "browser-info";
div.innerText= `You are using ${navigator.appName} version ${navigator.appVersion}`;

const body = document.getElementsByTagName("body")[0];
body.append(div);
