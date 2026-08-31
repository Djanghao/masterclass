# TypeScript Optimal solution with helper classes and data structures

**Author:** CodingCompadre
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-k-pairs-with-smallest-sums/solutions/4255257/](https://leetcode.com/problems/find-k-pairs-with-smallest-sums/solutions/4255257/)

---

# Intuition
I used a C++ approach and I coded up the classes I needed.

# Approach
I used the min heap approach with a set to keep track of visited pairs


# Complexity
- Time complexity:
O(k * log(n)) 

- Space complexity:
O(k)

# Code
```
/*
This is the tuple class which will contain any 3 types 
first - the first element
second - the second element
third - the third element
*/
class Tuple<T1, T2, T3> 
{
    public first: T1;
    public second: T2;
    public third: T3;

    constructor(element1: T1, element2: T2, element3: T3)
    {
        this.first = element1;
        this.second = element2;
        this.third = element3;
    }
}

interface Comparator<T> 
{
    compare(a: T, b: T): number;
}

// Hold our tuple comparator
const tupleComparator: Comparator<Tuple<number, number, number>> = 
{

    /*
    Compare the tuple
    @param Tuple<number, number, number> a the first tuple we will use to compare
    Tuple<number, number, number> b the second tuple we will use to compare
    @return number the difference from the comparison
    */
    compare(a: Tuple<number, number, number>, b: Tuple<number, number, number>): number 
    {
        return a.first - b.first;
    }
};

/*
This is a binary heap
elements - the array container for the elements
comparator - a comparator that contains the compare function to sort the heap
*/
class BinaryHeap<T>
{
    private elements: T[] = [];
    private comparator: Comparator<T>;

    constructor(comparator: Comparator<T>)
    {
        this.comparator = comparator;
    }

    /*
    Pushes an element into the heap and sorts it in the heap
    @param T element the element pushed in the heap
    @return void
    */
    push(element: T): void
     {
        
        // Push the element into the array
        this.elements.push(element);

        // Bubble up the element in the heap
        this.bubbleUp(this.size() - 1);
    }

    /*
    Pop the element from the heap
    @param none
    @return T the element from the heap 
    undefined if there is no element 
    */
    pop(): T | undefined 
    {
       
        // Check if the heap is empty
        if (this.isEmpty()) 
        {
            return undefined;
        }

        // Hold the root of the heap
        const root = this.elements[0];

        // Hold the last element in the heap
        const lastElement = this.elements.pop();

        // Check if the heap is not empty and the last element was not undefined
        if (!this.isEmpty() && lastElement) 
        {

            // Insert the last element
            this.elements[0] = lastElement;
            
            // Resort the heap
            this.bubbleDown(0);
        }

        // Return the root 
        return root;
    }

    /*
    Check if the heap is empty
    @param none
    @return boolean true if the heap size is 0
    */
    isEmpty(): boolean 
    {
        return this.size() === 0;
    }

    /*
    Return the length of the heap
    @param none
    @return number the size of the heap
    */
    size(): number 
    {
        return this.elements.length;
    }

    /*
    Sort the new element in the heap
    @param number index the index to from
    @return void
    */
    private bubbleUp(index: number): void 
    {

        // Loop until the index is at 0
        while (index > 0) 
        {
            
            // Hold the parent index 
            const parentIndex = Math.floor((index - 1) / 2);

            // Compare the current element with the parent
            if (this.comparator.compare(this.elements[index], this.elements[parentIndex]) < 0) 
            {

                // Swap the elements
                this.swap(index, parentIndex);

                // Set the new index
                index = parentIndex;
            }

            // Else the heap is sorted
            else 
            {

                // Break from the loop
                break;
            }
        }
    }

    /*
    Sort the heap after the removal of an element
    @param number index the index to start from
    @return void
    */
    private bubbleDown(index: number): void 
    {

        // Loop until we need to break
        while (true) 
        {

            // Hold the left child index
            const leftChildIndex = 2 * index + 1;

            // Hold the right child index
            const rightChildIndex = 2 * index + 2;

            // Hold the current smallest element
            let smallest = index;

            // Check if the left child is smaller
            if (leftChildIndex < this.size() && this.comparator.compare(this.elements[leftChildIndex], this.elements[smallest]) < 0) 
            {

                // Set the new smallest element
                smallest = leftChildIndex;
            }

            // Check if the right child is smaller
            if (rightChildIndex < this.size() && this.comparator.compare(this.elements[rightChildIndex], this.elements[smallest]) < 0) {
                
                // Set the new smallest element
                smallest = rightChildIndex;
            }

            // Check if we changed the smalled element
            if (smallest !== index) 
            {

                // Swap the elements
                this.swap(index, smallest);
                
                // Hold the new smallest element
                index = smallest;
            }

            // Else we fixed the heap structure
            else 
            {

                // Break from the loop
                break;
            }
        }
    }

    /*
    Swap two elements in the heap
    @param number a the first index to use
    number b the second index to use
    @param void
    */
    private swap(a: number, b: number): void 
    {

        // Hold the temp value
        const temp = this.elements[a];

        // Swap the elements
        this.elements[a] = this.elements[b];
        this.elements[b] = temp;
    }
}

function kSmallestPairs(nums1: number[], nums2: number[], k: number): number[][] {
    
    // Hold the solution
    const solution: number[][] = [];

    // Hold a set of visited pairs
    const visitedPairs = new Set<string>();
    
    // Hold a priority queue for the tuples
    const minHeap = new BinaryHeap<Tuple<number, number, number>>(tupleComparator);

    // Add the first tuple 
    minHeap.push(new Tuple(nums1[0] + nums2[0], 0, 0));

    // Add the first pair
    visitedPairs.add("0,0");

    // Loop until the heap is empty or solution size reaches k
    while (!minHeap.isEmpty() && solution.length < k) 
    {

        // Grab the tuple from the min heap 
        const currentTuple = minHeap.pop();

        // Hold the sum
        const sum = currentTuple!.first;

        // Hold the index from nums1
        const num1Index = currentTuple!.second;

        // Hold the index from nums2
        const num2Index = currentTuple!.third;

        // Push the new vector pair
        solution.push([nums1[num1Index], nums2[num2Index]]);

        // Check the next possible pairs of index by incrementing nums1Index and see if that pair is visited
        if (num1Index + 1 < nums1.length && !visitedPairs.has(`${num1Index + 1},${num2Index}`)) 
        {

            // Add the tuple to the heap
            minHeap.push(new Tuple(nums1[num1Index + 1] + nums2[num2Index], num1Index + 1, num2Index));

            // Add the pairs to the set
            visitedPairs.add(`${num1Index + 1},${num2Index}`);
        }

        // Check the next possible pairs of index by incrementing nums2Index and see if that pair is visited
        if (num2Index + 1 < nums2.length && !visitedPairs.has(`${num1Index},${num2Index + 1}`)) {

             // Add the tuple to the heap
            minHeap.push(new Tuple(nums1[num1Index] + nums2[num2Index + 1], num1Index, num2Index + 1));

            // Add the pairs to the set
            visitedPairs.add(`${num1Index},${num2Index + 1}`);
        }
    }

    // Return the solution
    return solution;
};
```