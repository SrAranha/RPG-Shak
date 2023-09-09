function Damage() {
    ResetPs();
    const attributeBase = document.getElementById("attributeBase").value;
    const attributePercentage = document.getElementById("attributePercentage").value;
    const additionalDamage = document.getElementById("additionalDamage").value;
    const doubleAttack = document.getElementById("doubleAttack").value;
    const isCritical = document.getElementById("isCritical");
    const damageHTML = document.getElementById("damage");

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
        let attacks = [];

        totalDamage = attributeBase * percentage;
        
        if (totalDamage < 1) { totalDamage = 1 }
        
        if (isCritical.checked) { totalDamage *= 2; }
        
        if (additionalDamage) { totalDamage = totalDamage + +additionalDamage; }

        totalDamage = Math.round(totalDamage);

        if (doubleAttack == 1) { damageHTML.innerText = totalDamage }
        
        else if (doubleAttack != 1)
        {
            for (let i = 0; i < doubleAttack; i++) {
                attacks.push(totalDamage);
            }
            totalDamage *= doubleAttack;
            damageHTML.innerText = attacks + " = " + totalDamage;
        }
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