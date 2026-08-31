# C based Implementation

**Author:** prabhatravi
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-spending-after-buying-items/solutions/5101245/](https://leetcode.com/problems/maximum-spending-after-buying-items/solutions/5101245/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
- We need to maximize the amount of money spent on buying products from different shops.
- On each day, we can buy one item from one shop, and the price of the item is determined by its value and the day number.

# Approach
<!-- Describe your approach to solving the problem. -->
1. We start by creating a priority queue to keep track of the available items in each shop. The priority queue is implemented using a binary heap.
2. For each shop, we push the rightmost available item into the priority queue.
3. We iterate through the priority queue until it's empty, and on each iteration:
- Pop the item with the lowest value from the priority queue.
- Calculate the price of the item based on its value and the current day number.
- Add the calculated price to the total spending.
- If there are more items available in the shop, push the next item into the priority queue.
4. Return the total spending as the maximum amount of money that can be spent on buying all products.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(m * n log m)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(m)$$

# Code
```
typedef struct {
    int value;
    int row;
    int col;
} Element;

typedef struct {
    Element* elements;
    int capacity;
    int size;
} PriorityQueue;

PriorityQueue* createPriorityQueue(int capacity) {
    PriorityQueue* pq = (PriorityQueue*)malloc(sizeof(PriorityQueue));
    pq->elements = (Element*)malloc(sizeof(Element) * (capacity + 1)); // +1 to handle 1-based indexing
    pq->capacity = capacity;
    pq->size = 0;
    return pq;
}

void swap(Element* a, Element* b) {
    Element temp = *a;
    *a = *b;
    *b = temp;
}

void heapifyUp(PriorityQueue* pq, int index) {
    while (index > 1 && pq->elements[index].value < pq->elements[index / 2].value) {
        swap(&(pq->elements[index]), &(pq->elements[index / 2]));
        index /= 2;
    }
}

void push(PriorityQueue* pq, Element element) {
    if (pq->size == pq->capacity) {
        // Queue is full
        return;
    }
    pq->elements[++(pq->size)] = element;
    heapifyUp(pq, pq->size);
}

void heapifyDown(PriorityQueue* pq, int index) {
    int smallest = index;
    int left = 2 * index;
    int right = 2 * index + 1;

    if (left <= pq->size && pq->elements[left].value < pq->elements[smallest].value) {
        smallest = left;
    }
    if (right <= pq->size && pq->elements[right].value < pq->elements[smallest].value) {
        smallest = right;
    }

    if (smallest != index) {
        swap(&(pq->elements[index]), &(pq->elements[smallest]));
        heapifyDown(pq, smallest);
    }
}

Element pop(PriorityQueue* pq) {
    if (pq->size == 0) {
        // Queue is empty
        Element nullElement = {0, 0, 0};
        return nullElement;
    }
    Element top = pq->elements[1];
    pq->elements[1] = pq->elements[pq->size];
    pq->size--;
    heapifyDown(pq, 1);
    return top;
}

long long maxSpending(int** values, int valuesSize, int* valuesColSize) {
    int m = valuesSize, n = valuesColSize[0];
    PriorityQueue* pq = createPriorityQueue(m);

    // Push the rightmost available item `j` for each shop `i`
    for (int i = 0; i < m; i++) {
        Element element = {values[i][n - 1], i, n - 1};
        push(pq, element);
    }
    
    // Buy the cheaper item earlier
    long long sum = 0LL, day = 1LL;
    while (pq->size > 0) {
        Element top = pop(pq);
        sum += (long long)(top.value) * (day++);
        if (top.col > 0) {
            Element newElement = {values[top.row][top.col - 1], top.row, top.col - 1};
            push(pq, newElement);
        }
    }

    // Free dynamically allocated memory
    free(pq->elements);
    free(pq);

    return sum;
}

```