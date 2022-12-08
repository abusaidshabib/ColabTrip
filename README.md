    let temp = "";
    let temp1 = temp.replace("https://drive.google.com/file/d/", "");
    let temp2 = temp1.replace("/view?usp=","");
    let temp3 = temp2.replace("share_link","");
    let url = temp3.replace("sharing","");

    const BgImg = `http://drive.google.com/uc?export=view&id=${url}`;