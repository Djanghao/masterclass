# Short Ruby / Python / Java / C++

**Author:** StefanPochmann
**Votes:** 1299
**Link:** [https://leetcode.com/problems/reconstruct-itinerary/solutions/78768/](https://leetcode.com/problems/reconstruct-itinerary/solutions/78768/)

---

Just Eulerian path. Greedy DFS, building the route backwards when retreating.

More explanation and example under the codes.

Iterative versions inspired by [fangyang](https://leetcode.com/discuss/84706/share-solution-java-greedy-stack-15ms-with-explanation) (I had only thought of recursion, d'oh).

---

**Ruby**

    def find_itinerary(tickets)
      tickets = tickets.sort.reverse.group_by(&:first)
      route = []
      visit = -> airport {
        visit[tickets[airport].pop()[1]] while (tickets[airport] || []).any?
        route << airport
      }
      visit["JFK"]
      route.reverse
    end

Iterative version:

    def find_itinerary(tickets)
      tickets = tickets.sort.reverse.group_by(&:first)
      route, stack = [], ["JFK"]
      while stack.any?
        stack << tickets[stack[-1]].pop()[1] while (tickets[stack[-1]] || []).any?
        route << stack.pop()
      end
      route.reverse
    end

---

**Python**

    def findItinerary(self, tickets):
        targets = collections.defaultdict(list)
        for a, b in sorted(tickets)[::-1]:
            targets[a] += b,
        route = []
        def visit(airport):
            while targets[airport]:
                visit(targets[airport].pop())
            route.append(airport)
        visit('JFK')
        return route[::-1]

Iterative version:

    def findItinerary(self, tickets):
        targets = collections.defaultdict(list)
        for a, b in sorted(tickets)[::-1]:
            targets[a] += b,
        route, stack = [], ['JFK']
        while stack:
            while targets[stack[-1]]:
                stack += targets[stack[-1]].pop(),
            route += stack.pop(),
        return route[::-1]

---

**Java**

    public List<String> findItinerary(String[][] tickets) {
        for (String[] ticket : tickets)
            targets.computeIfAbsent(ticket[0], k -> new PriorityQueue()).add(ticket[1]);
        visit("JFK");
        return route;
    }
    
    Map<String, PriorityQueue<String>> targets = new HashMap<>();
    List<String> route = new LinkedList();
    
    void visit(String airport) {
        while(targets.containsKey(airport) && !targets.get(airport).isEmpty())
            visit(targets.get(airport).poll());
        route.add(0, airport);
    }

Iterative version:

    public List<String> findItinerary(String[][] tickets) {
        Map<String, PriorityQueue<String>> targets = new HashMap<>();
        for (String[] ticket : tickets)
            targets.computeIfAbsent(ticket[0], k -> new PriorityQueue()).add(ticket[1]);
        List<String> route = new LinkedList();
        Stack<String> stack = new Stack<>();
        stack.push("JFK");
        while (!stack.empty()) {
            while (targets.containsKey(stack.peek()) && !targets.get(stack.peek()).isEmpty())
                stack.push(targets.get(stack.peek()).poll());
            route.add(0, stack.pop());
        }
        return route;
    }

---

**C++**

    vector<string> findItinerary(vector<pair<string, string>> tickets) {
        for (auto ticket : tickets)
            targets[ticket.first].insert(ticket.second);
        visit("JFK");
        return vector<string>(route.rbegin(), route.rend());
    }

    map<string, multiset<string>> targets;
    vector<string> route;

    void visit(string airport) {
        while (targets[airport].size()) {
            string next = *targets[airport].begin();
            targets[airport].erase(targets[airport].begin());
            visit(next);
        }
        route.push_back(airport);
    }

---

**Explanation**

First keep going forward until you get stuck. That's a good main path already. Remaining tickets form cycles which are found on the way back and get merged into that main path. By writing down the path backwards when retreating from recursion, merging the cycles into the main path is easy - the end part of the path has already been written, the start part of the path hasn't been written yet, so just write down the cycle now and then keep backwards-writing the path.

Example:

![enter image description here][1]

From JFK we first visit JFK -> A -> C -> D -> A. There we're stuck, so we write down A as the end of the route and retreat back to D. There we see the unused ticket to B and follow it: D -> B -> C -> JFK -> D. Then we're stuck again, retreat and write down the airports while doing so: Write down D before the already written A, then JFK before the D, etc. When we're back from our cycle at D, the written route is D -> B -> C -> JFK -> D -> A. Then we retreat further along the original path, prepending C, A and finally JFK to the route, ending up with the route JFK -> A -> C -> D -> B -> C -> JFK -> D -> A.

  [1]: https://www.stefan-pochmann.info/misc/reconstruct-itinerary.png