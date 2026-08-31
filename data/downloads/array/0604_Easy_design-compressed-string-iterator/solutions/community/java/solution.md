# Java | Using queue to hold groups of compressed elements

**Author:** greenciu
**Votes:** 1
**Link:** [https://leetcode.com/problems/design-compressed-string-iterator/solutions/1868160/](https://leetcode.com/problems/design-compressed-string-iterator/solutions/1868160/)

---

As the initial approach to uncompress the original string leads to TLE, an elegant way is to reuse the uncompress logic and add the information (char + occurrenceCount) into an ordered list/queue. Then on each next simply check the current group / bucket if it still has left-over occurrences and decrement the counter.

TC = O(n) to decode and build the list, O(1) to access `next()`, and `hasNext()`
SC = O(n) to hold the groups (ie n/2 as the compressed string can be formed of pairs of 2 chars)

```
    // holds each group's character and occurrence count
    class Node {
        char c;
        int count;

        public Node(char c, int count) {
            this.c = c;
            this.count = count;
        }
    }

    private final String compressed;
    private Queue<Node> queue; // holds the groups in order they appear in the original string

    private void uncompress() {
        if (this.compressed == null || this.compressed.length() <= 0) {
            return;
        }
        StringBuilder sb = new StringBuilder();
        char prev = this.compressed.charAt(0);
        int count = 0;
        for (int i = 1; i < this.compressed.length(); i++) {
            char c = this.compressed.charAt(i);
            if (Character.isDigit(c)) {
                count = count * 10 + Character.getNumericValue(c);
            } else {
                // we have a group (char + occurrenceCount) and add to our queue in order
                this.queue.offer(new Node(prev, count));
                // reset
                prev = c;
                count = 0;
            }
        }
        // add last group
        queue.offer(new Node(prev, count));
    }

    public StringIterator(String compressedString) {
        this.compressed = compressedString;
        this.queue = new LinkedList<>();
        uncompress();
    }

    public char next() {
        if (this.queue.isEmpty()) {
            return ' ';
        }
		// look at first group in the queue
        Node node = this.queue.peek();
        node.count--;
        if (node.count == 0) {
			// move to next group in the queue
            this.queue.poll();
        }
        return node.c;
    }

    public boolean hasNext() {
        return !this.queue.isEmpty();
    }
```