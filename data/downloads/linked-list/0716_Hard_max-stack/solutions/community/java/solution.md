# Java | 3 solutions | tree set | stack | heap | Binary search

**Author:** conchwu
**Votes:** 6
**Link:** [https://leetcode.com/problems/max-stack/solutions/2682305/](https://leetcode.com/problems/max-stack/solutions/2682305/)

---

# Stack + heap
```
//Runtime: 55 ms, faster than 89.84% of Java online submissions for Max Stack.
    //Memory Usage: 79.2 MB, less than 91.32% of Java online submissions for Max Stack.
    class MaxStack {

        Set<Integer> deleted;
        Deque<int[]> stack;
        PriorityQueue<int[]> heap;
        int idx = 0;

        public MaxStack() {
            deleted = new HashSet<>();
            stack = new ArrayDeque<>();
            heap = new PriorityQueue<>((a,b) -> (b[0] - a[0] == 0) ? b[1] - a[1] : b[0] - a[0]);
        }

        //Time: O(logN)
        public void push(int x) {
            int[] pair = new int[]{x, idx++};
            heap.add(pair);
            stack.push(pair);
        }

        //Time: O(logN)
        public int pop() {
            int[] pair = stack.pop();
            if (heap.peek().equals(pair)) heap.poll(); //O(logN)
            else deleted.add(pair[1]);
            removeNull();
            return pair[0];
        }

        //Time: O(1)
        public int top() {
            return stack.peek()[0];
        }

        //Time: O(1)
        public int peekMax() {
            return heap.peek()[0];
        }

        //Time: O(logN)
        public int popMax() {
            int[] pair = heap.poll(); //O(1)
            if (stack.peek().equals(pair)) stack.pop();
            else deleted.add(pair[1]);
            removeNull();
            return pair[0];
        }

        private void removeNull(){
            while (!stack.isEmpty() && deleted.contains(stack.peek()[1])) {
                deleted.remove(stack.peekLast()[1]);
                stack.pop();
            }

            while (!heap.isEmpty() && deleted.contains(heap.peek()[1])) {
                deleted.remove(heap.peek()[1]);
                heap.poll();
            }
        }

    }
```
# two TreeSets
```
    //Runtime: 109 ms, faster than 58.60% of Java online submissions for Max Stack.
    //Memory Usage: 96.7 MB, less than 78.26% of Java online submissions for Max Stack.
    //two TreeSets
    class MaxStack_treeset {
        //Space: O(N)
        TreeSet<int[]> stack;
        TreeSet<int[]> heap;
        int idx = 0;

        //Time: O(1)
        public MaxStack_treeset() {
            stack = new TreeSet<>(Comparator.comparingInt(a -> a[1]));
            heap = new TreeSet<>( (a, b)-> a[0] - b[0] == 0 ? a[1] - b[1] : a[0] - b[0]);
        }

        //Time: O(logN)
        public void push(int x) {
            int[] pair = new int[]{x, idx++};
            stack.add(pair);
            heap.add(pair);
        }

        //Time: O(logN)
        public int pop() {
            int[] pair = stack.pollLast();
            heap.remove(pair);
            if (stack.isEmpty()) idx = 0;
            return pair[0];
        }

        //Time: O(1)
        public int top() {
            return stack.last()[0];
        }

        //Time: O(1)
        public int peekMax() {
            return heap.last()[0];
        }

        //Time: O(logN)
        public int popMax() {
            int[] pair = heap.pollLast();
            stack.remove(pair);
            if (stack.isEmpty()) idx = 0;
            return pair[0];
        }
    }
```
# List + treeset + Binary Search
```
//Runtime: 166 ms, faster than 21.44% of Java online submissions for Max Stack.
    //Memory Usage: 78.8 MB, less than 91.39% of Java online submissions for Max Stack.
    //List + treeset + Binary Search
    class MaxStack {
        //Space: O(N)
        List<int[]> list;//stack
        TreeSet<int[]> treeSet; //maxheap
        int idx = 0;

        //Time: O(1)
        public MaxStack() {
            list = new ArrayList<>();
            treeSet = new TreeSet<>((a, b)-> a[0] - b[0] == 0 ? a[1] - b[1] : a[0] - b[0]);
        }

        //Time: O(logN)
        public void push(int x) {
            int[] pair = new int[]{x, idx++};
            list.add(pair);
            treeSet.add(pair);
        }

        //Time: O(logN)
        public int pop() {
            int[] pair = list.remove(list.size() - 1);
            treeSet.remove(pair);
            return pair[0];
        }

        //Time: O(1)
        public int top() {
            return list.get(list.size() - 1)[0];
        }

        //Time: O(1)
        public int peekMax() {
            return treeSet.last()[0];
        }

        //Time: O(logN)
        public int popMax() {
            int[] pair = treeSet.pollLast();
            list.remove(Collections.binarySearch(list, pair, Comparator.comparingInt(a -> a[1])));
            return pair[0];
        }

    }
```