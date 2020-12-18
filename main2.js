let isciler = {
    AdSoyad: ["Murad Hacıyev", "Leyla Tahirli", "Kamil Malikli"],
    Vezife: ["Mobil Developer", "C Developer", "SMM"],
    Maas: [2500, 6000, 350],
};


onload = function() {
    Table();
}


function Table() {
    let tbl = `
        <tr>
            <td>S/N</td>
            <td>Ad Soyad</td>
            <td>Vəzifə</td>
            <td>Maaş</td>
            <td>Əməliyyatlar</td>
        </tr>
    `;
    for (let i = 0; i < isciler.AdSoyad.length; i++) {
        tbl += `
        <tr>
            <td>${i+1}</td>
            <td>${isciler.AdSoyad[i]}</td>
            <td>${isciler.Vezife[i]}</td>
            <td>${isciler.Maas[i]} AZN</td>
            <td><button class="btn btn-outline-warning btn-sm" id="redakte${i+1}" class = "redaktec${i+1}" onclick="hello(${i+1})" data-target="#add" data-toggle="modal">Redaktə Et</button></td>
        </tr>
    `
    }

    document.getElementsByClassName("table")[0].innerHTML = tbl;
}


let AdSoyad = document.getElementById("AdSoyad");
let Vezife = document.getElementById("Vezife");
let Maas = document.getElementById("Maas");

function Add() {
    if (AdSoyad.value !== "" && Vezife.value !== "" && Maas.value !== "") {
        isciler.AdSoyad.push(AdSoyad.value);
        isciler.Vezife.push(Vezife.value);
        isciler.Maas.push(Maas.value);
        AdSoyad.value = "";
        Vezife.value = "";
        Maas.value = "";
        Table();
    }

}


function hello(i) {
    window.n = i;
    for (let j = 0; j < isciler.AdSoyad.length; j++) {
        if (j + 1 == i && Number.isInteger(i) == true) {
            AdSoyad.value = isciler.AdSoyad[j]
            Vezife.value = isciler.Vezife[j]
            Maas.value = isciler.Maas[j]
        }



    }
    // document.getElementsByClassName("sil1")[0].style.display = "none";
}

function hello2() {
    for (let i = 0; i < isciler.AdSoyad.length; i++) {
        if (i + 1 == window.n) {
            isciler.AdSoyad[i] = AdSoyad.value;
            isciler.Vezife[i] = Vezife.value;
            isciler.Maas[i] = Maas.value
        }
    }

    Table();

}