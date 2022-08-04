const checkMostly = (arr) => {
        var max = 1;
        var count = 0;
        var item;
        for (var i=0; i<arr.length; i++)
        {
                for (var j=i; j<arr.length; j++)
                {
                        if (arr[i] == arr[j])
                         count++;
                        if (max<count)
                        {
                          max=count; 
                          item = arr[i];
                          
                        }
                }
                count=0;
        }
        return item;

    }
    const getArrayResult = (arr)=> {
        let lengths = [];
        let arrResult = [];
        for(let i = 0; i<arr.length; i++) {
            lengths[i] = arr[i].length;
        }
        let lengthResult = checkMostly(lengths);
        for(let i = 0; i<arr.length; i++) {
            if(lengthResult==arr[i].length) {
                arrResult.push(arr[i]);
            }
        }
        return arrResult;
       
    } 
    console.log(getArrayResult(['a','ab','abc','cd','def','gh']));