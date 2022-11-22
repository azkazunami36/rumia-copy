const readline = require("readline");
const start = async () => {
    console.log(
        "制作元: " + "ルーミア" + "\n" +
        "ver " + "1.6" + "\n" +
        "これはなんじゃ"
    );
    console.log(
        "[1] paypay\n" +
        "[2] Discord BOT Token\n" +
        "[3] Discord Server Link\n" +
        "[4] Create Password\n" +
        "[5] Nitro Gift"
    );
    const selectNo = await questions("上記から数字で選択してください。: ");
        readline.moveCursor(process.stdout, 0, -1);
        process.stdout.clearLine();
    const loopNo = await questions("選択する回数を入力してください。: ");
    program_startUP(selectNo, loopNo);
};
const questions = text => {
    const interface = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    return new Promise((resolve, reject) => {
        interface.question(text, answer => { resolve(answer); interface.close(); });
    });
};
const program_startUP = (select, No) => {
    console.clear();
    const selectNo = Number(select);
    const loopNo = Number(No);
    if (!selectNo || !loopNo) return console.log("入力されたデータが無効です。");
    for (let i = 0; i != loopNo; i++) {
        switch (selectNo) {
            case 1: { console.log("https://pay.paypay.ne.jp/" + random(8)); break; }
            case 2: { console.log("OTA" + random(21) + "." + random(6) + "." + random(28)); break; }
            case 3: { console.log("https://discord.gg/" + random(8)); break; }
            case 4: { console.log("pass:" + random(8)); break; }
            case 5: { console.log("https://discord.gift/" + random(8)); break; }
        }
    }
};
const random = length => {
    const string = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789";
    return Array.from(require("crypto").randomFillSync(new Uint32Array(length))).map(n => string[n % string.length]).join("");
};
start();