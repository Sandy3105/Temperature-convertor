
const calculateTemp = ()=>{
    const inputTemp = document.getElementById('temp').value;
    const tempDiff = document.getElementById('temp_diff').value;
    console.log(inputTemp);
    console.log(tempDiff);

    const celToFar=(tem)=>{
        let far = Math.round((tem * 9/5) + 32);
        return far;
    }

    const farToCel=(tem)=>{
        let cel = Math.round((tem - 32) * 5/9);
        return cel;
    }


    let result;
    if (tempDiff=='Cel') {
        result = celToFar(inputTemp);
        document.getElementById('resultContainer').innerHTML=`= ${result} Farhenheit`;
    }else{
        result = farToCel(inputTemp);
        document.getElementById('resultContainer').innerHTML=`= ${result} Celcius`;
    }
}

// calculateTemp();