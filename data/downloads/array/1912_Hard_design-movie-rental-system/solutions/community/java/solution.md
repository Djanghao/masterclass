# Java TreeSet with customer comparator 601ms 88.37%

**Author:** henrychen222
**Votes:** 2
**Link:** [https://leetcode.com/problems/design-movie-rental-system/solutions/3070792/](https://leetcode.com/problems/design-movie-rental-system/solutions/3070792/)

---

```
public class MovieRentingSystem {
    Map<Integer, TreeSet<Node>> unrentM, rentM;
    Map<String, Integer> m; // record shop movie pairs -> price to build node for searching in treeset

    public MovieRentingSystem(int n, int[][] a) {
        unrentM = new HashMap<>();
        rentM = new HashMap<>();
        m = new HashMap<>();
        for (int i = 0; i < a.length; i++) {
            unrentM.computeIfAbsent(a[i][1], x -> new TreeSet<>()).add(new Node(a[i][0], a[i][1], a[i][2]));
            m.put(a[i][0] + " " + a[i][1], a[i][2]);
        }
    }

    public List<Integer> search(int movie) {
        List<Integer> res = new ArrayList<>();
        TreeSet<Node> ts = unrentM.getOrDefault(movie, new TreeSet<>());
        int cnt = Math.min(5, ts.size()), i = 0;
        for (Node node : ts) {
            if (i == cnt) break;
            res.add(node.shop);
            i++;
        }
        return res;
    }

    public void rent(int shop, int movie) {
        op(shop, movie, unrentM, rentM);
    }

    public void drop(int shop, int movie) {
        op(shop, movie, rentM, unrentM);
    }

    private void op(int shop, int movie, Map<Integer, TreeSet<Node>> source, Map<Integer, TreeSet<Node>> saveTo) {
        TreeSet<Node> ts = source.getOrDefault(movie, new TreeSet<>());
        String ke = shop + " " + movie;
        if (m.containsKey(ke)) {
            int price = m.get(ke);
            Node node = new Node(shop, movie, price);
            if (ts.contains(node)) {
                saveTo.computeIfAbsent(movie, x -> new TreeSet<>()).add(node);
                ts.remove(node);
                if (ts.size() == 0) {
                    source.remove(movie);
                } else {
                    source.put(movie, ts);
                }
            }
        }
    }

    public List<List<Integer>> report() {
        TreeSet<Node> d = new TreeSet<>();
        for (int x : rentM.keySet()) {
            TreeSet<Node> ts = rentM.get(x);
            d.addAll(ts);
        }
        List<List<Integer>> res = new ArrayList<>();
        int cnt = Math.min(5, d.size()), i = 0;
        for (Node node : d) {
            if (i == cnt) break;
            res.add(new ArrayList<>() {{
                add(node.shop);
                add(node.movie);
            }});
            i++;
        }
        return res;
    }

    class Node implements Comparable<Node> {
        int shop, movie, price;

        Node(int shop, int movie, int price) {
            this.shop = shop;
            this.movie = movie;
            this.price = price;
        }

        @Override
        public int compareTo(Node y) {
            if (price != y.price) return Integer.compare(price, y.price);
            if (shop != y.shop) return Integer.compare(shop, y.shop);
            return Integer.compare(movie, y.movie);
        }

        public String toString() {
            return this.shop + " " + this.movie + " " + this.price;
        }
    }
}
```
AVL Tree Version: https://leetcode.com/problems/design-movie-rental-system/solutions/3084732/javascript-avl-tree-2265ms-100/