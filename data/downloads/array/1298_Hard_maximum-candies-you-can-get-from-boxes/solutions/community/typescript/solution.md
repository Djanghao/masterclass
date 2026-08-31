# JavaScript solution beats 100%

**Author:** user5216f
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-candies-you-can-get-from-boxes/solutions/1220981/](https://leetcode.com/problems/maximum-candies-you-can-get-from-boxes/solutions/1220981/)

---

```
function maxCandies(status: number[], candies: number[], keys: number[][], containedBoxes: number[][], initialBoxes: number[]): number {
    let count = 0;
    
    var node = function(){
        this.index;
        this.explored = false;
        this.candies = 0;
        this.opened = false;
        this.remaining = true;
        
        this.setOpened = function(){
            this.opened = true;
            return this.checkAll();
        }
        this.setExplored = function(){
            this.explored = true;
            return this.checkAll();
        }
        this.checkAll = function(){
            return (this.explored && this.opened && this.remaining);
        }
    };
    
    let openNodes = initialBoxes;
    let nodes = [];
    
    for(let i=0; i<status.length; i++){
        nodes[i] = new node();
        nodes[i].index = i;
        nodes[i].candies = candies[i];
        if(status[i] == 1)
            nodes[i].setOpened();        
    }
    

    
    while(openNodes.length){
        let i = openNodes.shift(); 
            if(!nodes[i].remaining){
              continue;  
            }
        count += nodes[i].candies;
        nodes[i].remaining = false;
        
        containedBoxes[i].forEach(index=>{
            if(nodes[index].setExplored())
                openNodes.push(index);
        });
        
        keys[i].forEach(index=>{
            if(nodes[index].setOpened())
                openNodes.push(index);
        });  
    }
    
    return count;
    
};
```

1. There is no looping over the array in any case
2.  Only access candies from the box which is available to open
3.  
```
		this.index;
        this.explored = false;
        this.candies = 0;
        this.opened = false;
        this.remaining = true;
```
is used to mainin the parameters available with each box. 
whenever the box changes on of the parameters, It also returns if it is available to open or not. 
```openNodes``` keeps track of the boxes which can be opened and not yet calculated.

