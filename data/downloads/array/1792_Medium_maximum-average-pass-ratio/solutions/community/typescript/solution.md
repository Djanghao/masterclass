# Typescript Min Priority Queue Implementation, Simplified.

**Author:** zanycactus1
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-average-pass-ratio/solutions/4388679/](https://leetcode.com/problems/maximum-average-pass-ratio/solutions/4388679/)

---

Implementation:
create a min priority queue.
populate that queue for each class, only enqueue classes which could improve by adding a student.
While we can still add students, add them to the class which has the most need for the student. 

# Code
```
function maxAverageRatio(classes: number[][], extraStudents: number): number {
    const classQueue = new PriQueue<IClass>();
    populateClassQueue(classQueue,classes);
    
    while(extraStudents > 0){
        extraStudents--;
        const worstClass = classQueue.pop();
        if(worstClass === undefined){
            break;
        }

        classes[worstClass.index][0]+=1;
        classes[worstClass.index][1]+=1;

        classQueue.push(worstClass, getPriorityFromClass(worstClass.value));
    }

    return classes.reduce((sumRatio: number, aClass: number[]): number => {
        return sumRatio + (aClass[0]/aClass[1])
    }, 0)/classes.length;
};

function populateClassQueue(classQueue: PriQueue<IClass>, classes: number[][]): void {
    classes.forEach((aClass: number[], index: number): void => {
        const pri = getPriorityFromClass(aClass);
        if(pri !== 0){
            classQueue.push(
                {
                    value: aClass,
                    index,
                },
                pri
            );
        }
    });
}

function getPriorityFromClass(theClass: number[]): number {
        const currRatio = theClass[0]/theClass[1];
        const nextRatio = (theClass[0]+1)/(theClass[1]+1);
        return 1-(nextRatio-currRatio); // i 
}

interface IClass {
    value: number[],
    index: number,
}

class PriQueue<T> {
    private elements: { value: T, priority: number }[];

    constructor() {
        // Initialize an empty array to store elements
        this.elements = [];
    }

    push(element: T, priority: number): void {
        // Add a new element to the priority queue
        // Maintain the min-heap property
        this.elements.push({ value: element, priority });
        this.bubbleUp();
    }

    pop(): T | undefined {
        // Remove and return the element with the highest priority
        if (this.elements.length === 0) {
            return undefined;
        }

        this.swap(0, this.elements.length - 1);
        const popped = this.elements.pop();
        this.bubbleDown();
        
        return popped?.value;
    }

    peek(): T | undefined {
        // Return the element with the highest priority without removing it
        return this.elements.length > 0 ? this.elements[0].value : undefined;
    }

    size(): number {
        // Return the number of elements in the priority queue
        return this.elements.length;
    }

    private bubbleUp(): void {
        let index = this.elements.length - 1;

        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);

            if (this.elements[index].priority < this.elements[parentIndex].priority) {
                this.swap(index, parentIndex);
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    private bubbleDown(): void {
        let index = 0;

        while (true) {
            const leftChildIndex = 2 * index + 1;
            const rightChildIndex = 2 * index + 2;
            let smallestChildIndex = index;

            if (leftChildIndex < this.elements.length &&
                this.elements[leftChildIndex].priority < this.elements[smallestChildIndex].priority) {
                smallestChildIndex = leftChildIndex;
            }

            if (rightChildIndex < this.elements.length &&
                this.elements[rightChildIndex].priority < this.elements[smallestChildIndex].priority) {
                smallestChildIndex = rightChildIndex;
            }

            if (smallestChildIndex !== index) {
                this.swap(index, smallestChildIndex);
                index = smallestChildIndex;
            } else {
                break;
            }
        }
    }

    private swap(i: number, j: number): void {
        const temp = this.elements[i];
        this.elements[i] = this.elements[j];
        this.elements[j] = temp;
    }
}
```