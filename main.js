function Damage() {
    ResetPs();
    const attributeBase = document.getElementById("attributeBase").value;
    const attributePercentage = document.getElementById("attributePercentage").value;
    let additionalDamage = document.getElementById("additionalDamage").value;
    const doubleAttack = document.getElementById("doubleAttack");
    const isCritical = document.getElementById("isCritical");

    if (!attributeBase) {
        const textAB = document.getElementById("textAB");
        textAB.innerText += " É OBRIGATÓRIO!";
    }
    if (!attributePercentage) {
        const textAP = document.getElementById("textAP");
        textAP.innerText += " É OBRIGATÓRIO!";
    }
    else
    {
        let percentage = attributePercentage / 100;
        let totalDamage;
        totalDamage = attributeBase * percentage;

        if (additionalDamage) {
            totalDamage = totalDamage + +additionalDamage;
        }
    
        if (doubleAttack.checked) {
            totalDamage *= 2;
        }
        if (isCritical.checked) {
            totalDamage *= 2;
        }
        
        const damageHTML = document.getElementById("damage");
        damageHTML.innerText = totalDamage;
    }    
}

function ResetPs() {
    const textAB = document.getElementById("textAB");
    const defaultAB = "Atributo Básico";
    textAB.innerText = defaultAB;
    
    const textAP = document.getElementById("textAP");
    const defaultAP = "Porcentagem usada do atributo";
    textAP.innerText = defaultAP;
}