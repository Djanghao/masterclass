# Java easiest solution with explanation

**Author:** hardik_ahir
**Votes:** 6
**Link:** [https://leetcode.com/problems/apply-discount-every-n-orders/solutions/751400/](https://leetcode.com/problems/apply-discount-every-n-orders/solutions/751400/)

---

Concept : As we have given the array of ids of products and correspondig to that prices of products, one can easily think that this problem can solved by making key-value pair ( product-id, product-amount ) And after that we can use built-in HashMap interface defined in java.

So first of all, we can initialize all the required properties of Cashier class using the <b>this</b> keyword. And using for loop we will add the id-amount pair to the map.

Whenever there is call of function getBill we have to increment the customer count by one. If it is equal to the total no of customers then we have to subtract the discount from the bill. And also we have to make count to zero so that we can again keep track of the customer who can get discount.

<b> Note : Use the datatype double in initialization of the bill variable because in int, it will give wrong answer due to decimal point. </b>

Solution :

```
class Cashier {
    
    int count;
    Map<Integer,Integer> map;
    int d;
    int total_cus;

    public Cashier(int n, int discount, int[] products, int[] prices) {
        count = 0;
        this.d = discount;
        this.total_cus = n;
        map = new HashMap<>();
        
        for(int i=0; i<products.length; i++) {
            map.put(products[i], prices[i]);
        }
    }
    
    public double getBill(int[] product, int[] amount) {
        
        count++;
        double bill = 0;
        
        for(int i=0; i<product.length; i++) {
            bill += map.get(product[i]) * amount[i];
        }
        
        if(count == total_cus) {
            count = 0;
            return (bill - (d * bill)/100);   
        } else {
            return bill;
        }
    }
}
```

Do upvote if you like solution.