# C++ Prefix Product Solution Explained

**Author:** ahsan83
**Votes:** 16
**Link:** [https://leetcode.com/problems/product-of-the-last-k-numbers/solutions/898218/](https://leetcode.com/problems/product-of-the-last-k-numbers/solutions/898218/)

---

Runtime: 224 ms, faster than 97.30% of C++ online submissions for Product of the Last K Numbers.
Memory Usage: 70.5 MB, less than 5.76% of C++ online submissions for Product of the Last K Numbers.

```
Inorder to compute product of last k numbers we can store the prefix product of numbers in 
vector when a new number is added. Then the product of last k numbers can be found as:

product of last k numbers = prefix_product[end] / prefix_product[end-k]

end = last index of prefix product array 

Example: 

Number Array: [1, 2, 3, 4, 5]
Prefix Product: [1, 1, 2, 6, 24, 120] (Add 1 at first so that we can compute product for k == number array size)

prefix_product_array->end = 5 (0 indexed)

k = 1 => prefix_product[5] / prefix_product[4] = 120/24 = 5
k = 2 => prefix_product[5] / prefix_product[3] = 120/6 = 20
k = 3 => prefix_product[5] / prefix_product[2] = 120/2 = 60
k = 4 => prefix_product[5] / prefix_product[1] = 120/1 = 120
k = 5 => prefix_product[5] / prefix_product[0] = 120/1 = 120

Now given array can contain zero in it and so we track the position of last zero and return
0 if it last zero position is in the range of end-k-1 to end inclusive. Number array containing 
zero will have prefix product array as bellow,

Number Array: [1, 2, 0, 4, 5]
Prefix Product: [1, 1, 2, 0, 4, 20]   (Add 1 at first)

k = 1 => prefix_product[5] / prefix_product[4] = 20/4 = 5  (no zero)
k = 2 => prefix_product[3] == 0 => prefix_product[5] = 20  (end-k is zero)
k = 3 => prefix_product[3] == 0 => product = 0  (zero in last k numbers)
k = 4 => prefix_product[3] == 0 => product = 0  (zero in last k numbers)
k = 5 => prefix_product[3] == 0 => product = 0  (zero in last k numbers)

```

```
class ProductOfNumbers {
public:
    
    // store prefix product of numbers
    vector<int>products;
    
    // store position of last zero number
    int last_zero;
    
    ProductOfNumbers() {
        
        // insert initial value product value 1
        products.push_back(1);
        
        // initially no zero value
        last_zero  = -1;
    }
    
    void add(int num) {
        
        // insert number if num == 0 or last number was 0 
        if(num==0 || products.back()==0)
        {
            // update last zero position
            if(num==0) last_zero = products.size();
            
            products.push_back(num);
        }
        else
        {
            // insert prefix product of current number  = last product * current number
            products.push_back(products.back()*num);
        }
    }
    
    int getProduct(int k) {
        
        // position of the k th product from last
        int limit = products.size()-k;
        
        // product will be zero if there is a zero in last k numbers
        if(last_zero>=limit) return 0;
        
        // product will be prefix product[end] if prefix product[end-k] ==0 to avoid divide by zero
        if(products[limit-1]==0) return products.back();
        
        // return prefix product[end] / prefix product[end-k]
        return products.back()/products[limit-1];
    }
};
```