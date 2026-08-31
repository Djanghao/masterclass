# Java, prefix product, beats 100%, explained

**Author:** gthor10
**Votes:** 26
**Link:** [https://leetcode.com/problems/product-of-the-last-k-numbers/solutions/512354/](https://leetcode.com/problems/product-of-the-last-k-numbers/solutions/512354/)

---

We can easily count the product in O(1) time if we keep the product prefix array - every next element of such array is the product of the previous product and next element added to the data structure. 

Only problem with this approach is 0 element - it ruins this logic because every next element after it will be 0 if we just keep multiplying naively. 

However if you think about it - we don't care about element before 0 because all such queries will return 0. The only sequence that can return some value > 0 will be the after the 0. This means that we essentially reset our structure after 0 element and start over.

For getProduct method we need to check if we have enough elements in our data structure. If not (as per problem statement we should always have enough) it means we have met 0 before and erased the data. In this case we can just return 0. Otherwise return normally as per prefix product logic - arr[N - 1]/arr[N - 1 - k]. 

Catches: it's easier if we initialize our list with 1 - in this case calculation became easier for cases when we added exactly k elements, otherwise we would need extra logic to check the size(). 
another cath - we can keep previous element and calculate next element based on it's value directly instead of goinmg every time to the list - will save some time

O(1) time for add (on average, if we skip details of dynamic array in java), O(1) getProduct method - few comparisions and one division.
O(n) space - potentially we can have products of all elements in a list

```
public class ProductOfLastKNumbers {
    List<Integer> list;
    int prev;
    public ProductOfLastKNumbers() {
        list = new ArrayList();
        list.add(1);
        prev = 1;
    }

    public void add(int num) {
        //if element is > 0 create next element in a prefix product list. Update prev to be this
        //element
        if (num > 0) {
            prev*=num;
            list.add(prev);
        }
        //if this is 0  we need to reinit the structure
        else {
            list = new ArrayList();
            list.add(1);
            prev = 1;
        }
    }

    public int getProduct(int k) {
        int N = list.size();
        //in case there are not enough elements by the problem definition it can only happen if
        //we have met 0 before. In this case return 0. In all other cases we get the product from
        //division due to prefix product property. Note that list always has n + 1 elements due to 
        //initial 1, we need it to avoid outofbounds checks for edge cases
        return (k < N) ? prev / list.get(N - 1 - k) : 0;
    }
}
```