# JS with Min Heap & Max Heap

**Author:** scootmcgoot
**Votes:** 2
**Link:** [https://leetcode.com/problems/dinner-plate-stacks/solutions/591806/](https://leetcode.com/problems/dinner-plate-stacks/solutions/591806/)

---

This solution uses a Min Heap to manage pushing and a Max Heap to manage popping.

```
const DinnerPlates = function(capacity) {
    this.capacity = capacity;
    this.stacks = [];
    
    //minHeap determines which is the leftmost stack with size less than capacity
    this.minHeap = new Heap('min');
    
    //maxHeap determines which is the right most non-empty stack
    this.maxHeap = new Heap('max');
};

DinnerPlates.prototype.push = function(val) {
   
    //get the next value in the min heap (left most available stack)
    let index = this.minHeap.peek();
    
    //If a value exists in the minHeap...
    if(index >= 0) {
        
        //push the value into that stack
        this.stacks[index].push(val);
        let size = this.stacks[index].length;
        
        //if the size is === capacity, pop from min heap
        if(size === this.capacity) this.minHeap.pop();

        //if the size === 1 add index to the max heap
        if(size === 1) this.maxHeap.push(index);
    
    //If minHeap is empty...
    } else {
        
        //Add a new stack with the value
        this.stacks.push([val]);
        index = this.stacks.length - 1;
        
        //if capacity > 1 push the index to the minHeap
        if(this.capacity > 1) this.minHeap.push(index);
        
        //Push the index to the index to the maxHeap
        this.maxHeap.push(index);
    }
    
    return null;
};

DinnerPlates.prototype.pop = function() {
    //peek at the next value in the maxHeap
    let index = this.maxHeap.peek();

    //return -1 if there is nothing to pop
    if(index < 0) return -1;
    
    //pop from the top maxHeap value
    let result = this.stacks[index].pop();
    let size = this.stacks[index].length;

    //if the size === 0 pop from maxHeap
    if(size === 0) this.maxHeap.pop();
    
    //if the size === (capacity - 1) push index to minHeap
    if(size === this.capacity - 1) this.minHeap.push(index);

    return result;
};

DinnerPlates.prototype.popAtStack = function(index) {
    //if index does not exist or inde does not have values, return -1
    if(!this.stacks[index] || !this.stacks[index].length) return -1;
    
    //pop item from given stack
    let result = this.stacks[index].pop();
    let size = this.stacks[index].length;
    
    //if size === 0, remove it from from the maxHeap
    if(size === 0) this.maxHeap.remove(index);
    
    //if size (capacity - 1) push index to minHeap
    if(size === this.capacity - 1) this.minHeap.push(index)

    return result
};


//Define Heap
//can be 'min' or 'max'
const Heap = function(type = 'max') {
	this.type = (type === 'min' || type === 'max') ? type : 'max';
	this.values = [];
}

Heap.prototype.push = function(element) {
    this.values.push(element);
    this.bubbleUp(this.values.length - 1);
}

Heap.prototype.pop = function() {
 if(!this.values.length) return null;
 if(this.values.length === 1) return this.values.pop();
    
 let result = this.values[0];
 let end = this.values.pop();
 this.values[0] = end; 
 this.bubbleDown(0);
 return result;
}

Heap.prototype.remove = function(index) {
  let length = this.values.length;
  
  for(let i = 0; i < length; i++) {
  	if(this.values[i] != index) continue;
    let end = this.values.pop();
    if(i === length - 1) break;
    this.values[i] = end;
    this.bubbleUp(i);
    this.bubbleDown(i);
    break;
  }
}

Heap.prototype.size = function() {
	return this.values.length;
}

Heap.prototype.peek = function() {
    return (this.values[0] >= 0) ? this.values[0] : -1;
}

Heap.prototype.bubbleUp = function(index) {
  const element = this.values[index];
  
  while(index > 0) {
  	let parentIndex = Math.floor((index - 1) / 2);
    let parent = this.values[parentIndex];
    if((this.type === 'max' && element <= parent) || (this.type === 'min' && element >= parent)) break;
    
    [this.values[index], this.values[parentIndex]] = [parent, element];
    index = parentIndex;
  }
}

Heap.prototype.bubbleDown = function(index) {
  const length = this.values.length;
  const element = this.values[index];

    while(true) {
  	let swap = null;
  	let rightChildIndex = 2 * (index + 1), leftChildIndex = rightChildIndex - 1;
	let leftChild, rightChild;
    if(leftChildIndex < length) {
        leftChild = this.values[leftChildIndex]; 
        if(
            (leftChild > element && this.type === 'max') 
            || (leftChild < element && this.type === 'min') 
        ) swap = leftChildIndex;
    }
    if(rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        const comparison = swap == null ? element : leftChild;
        if(
            (rightChild > comparison && this.type === 'max') 
            || (rightChild < comparison && this.type === 'min')
        )swap = rightChildIndex;
    }
      
    if(!swap) break;
    this.values[index] = this.values[swap];
    this.values[swap] = element

    index = swap;
  }
}
```