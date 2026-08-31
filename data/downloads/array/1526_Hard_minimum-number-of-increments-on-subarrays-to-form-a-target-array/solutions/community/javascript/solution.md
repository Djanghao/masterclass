# Javascript O(n) with clear intuitive explanation

**Author:** tothesun
**Votes:** 9
**Link:** [https://leetcode.com/problems/minimum-number-of-increments-on-subarrays-to-form-a-target-array/solutions/1357383/](https://leetcode.com/problems/minimum-number-of-increments-on-subarrays-to-form-a-target-array/solutions/1357383/)

---

Btw looking for feedback here, if you didn't understand the explanation, please simply leave "don't understand" or something. 

Would appreciate to know where exactly you didn't understand so I can clarify. 
THOUGHT PROCESS
An operation here means we increment by 1, across a consecutive set of elements in an array. So if we break down example 2 in the description, taking a look from a bottom up approach. 

We'll have a total operations count, `let totalOps = 0;`

```[3,1,1,2] // final state```

We start at 
```[0,0,0,0]```
```[1,1,1,1] // totalOps = 1, incrementing all elements, ```
```[2,1,1,1] // totalOps = 2, incrementing index 0```
```[3,1,1,1] // totalOps = 3, incrementing index 0```
```[3,1,1,2] // totalOps = 4, incrementing index 3, final state```

So we see, given the final state ```[3,1,1,2]```, the elements represent the operations required to get to that state, sort of. 

step 1, increment element at index 0 and all elements by 1
step 2, increment element at index 0 by 1
step 3, increment element at index 0 by 1
step 4, increment element at index 3 by 1

to visualize
```
operation 4       -
operation 3 -        
operation 2 -         
operation 1 - - - -
```

Let's look at this problem at each index in terms of ```where I am now``` and ```where I need to be``` 

So our initial ```totalOps = 0```, looking at index 0 of ```[3,1,1,2]```, 
```where I am now = 0```, ```where I need to be = 3```, so ```totalOps = 3```, and we update ```where I am now = 3```

at index 1, ```where I need to be``` is 1, while ```where I am now = 3```, so I don't need to incur operation to move down. We move to the next index, update ```where I am now = 1```

at index 2, its the same

at index 3, since ```where I am now = 1```, but ```where I need to be = 2```, we only need to increment once, ```where I need to be - where I am now, 2 - 1 = 1```, so now ```totalOps = 4```

solution
```
var minNumberOperations = function(target) {
	let totalOps = 0; 
	let whereIAmNow = 0;
	for(let i = 0; i<target.length; i++){
		let whereINeedToBe = target[i];
		if(whereIAmNow <= whereINeedToBe){
			// we only increment totalOps here
			totalOps = totalOps + whereINeedToBe - whereIAmNow
		}
		whereIAmNow = whereINeedToBe
	
	}
	return totalOps
};
```

