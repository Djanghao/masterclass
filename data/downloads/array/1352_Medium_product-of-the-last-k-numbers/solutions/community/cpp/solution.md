# ✅💯🔥Simple Code🚀📌|| 🔥✔️Easy to understand🎯 || 🎓🧠Beats 100%🔥|| Beginner friendly💀💯

**Author:** atishayj4in
**Votes:** 5
**Link:** [https://leetcode.com/problems/product-of-the-last-k-numbers/solutions/5709743/](https://leetcode.com/problems/product-of-the-last-k-numbers/solutions/5709743/)

---

# Tuntun Mosi ko Pranam
Solution tuntun mosi ki photo ke baad hai. Scroll Down
![fd9d3417-20fb-4e19-98fa-3dd39eeedf43_1723794694.932518.png](./images/0.png)
# Code
```java []
class ProductOfNumbers {
    List<Integer> list;
    int prev;
    public ProductOfNumbers() {
        list=new ArrayList<>();
        prev=1;
        list.add(1);
    }
    
    public void add(int num) {
        if(num>0){
            prev*=num;
            list.add(prev);
        }else{
            list=new ArrayList();
            list.add(1);
            prev=1;
        }
    }
    
    public int getProduct(int k) {
        int n = list.size();
        return k<n? prev/list.get(n-1-k):0;
    }
}

/**
 * Your ProductOfNumbers object will be instantiated and called as such:
 * ProductOfNumbers obj = new ProductOfNumbers();
 * obj.add(num);
 * int param_2 = obj.getProduct(k);
 */
```
![7be995b4-0cf4-4fa3-b48b-8086738ea4ba_1699897744.9062278.jpeg](./images/1.jpeg)