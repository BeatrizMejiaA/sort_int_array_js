
function sort(){

    const arr = [9,6,2,1,4,8];
    // 1 2 4 6 8 9 
    const len = arr.length;
    const res = [];
    var j =0;
    var aux1;
    var aux2;
    
    
    for(var i = 0; i < len-1; i++){
    
        for(var j = i+1; j < len; j++){
          if(arr[i] > arr[j]){
            aux1 = arr[i];
          aux2 = arr[j];
          arr[i] = aux2;
          arr[j] = aux1;
        }
      }
    
    }
    
    console.log(arr);
    
    
    }
    
    sort();