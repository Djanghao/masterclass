# Java | JavaScript | TypeScript | C++ | C# | Kotlin | Go Solution.

**Author:** LachezarTsK
**Votes:** 0
**Link:** [https://leetcode.com/problems/apply-discount-every-n-orders/solutions/5687772/](https://leetcode.com/problems/apply-discount-every-n-orders/solutions/5687772/)

---

```Java []
public class Cashier {

    private static final int[] RANGE_OF_PRODUCT_ID = {1, 200};

    private final int[] productID_toPrice;
    private final int nthCustomerEligibleForDiscount;
    private final double discountedPriceFraction;

    private int countCustomers;

    public Cashier(int n, int discount, int[] products, int[] prices) {
        nthCustomerEligibleForDiscount = n;
        this.discountedPriceFraction = (double) (100 - discount) / 100;
        productID_toPrice = new int[RANGE_OF_PRODUCT_ID[1] + 1];

        for (int i = 0; i < products.length; ++i) {
            productID_toPrice[products[i]] = prices[i];
        }
    }

    public double getBill(int[] product, int[] amount) {
        ++countCustomers;
        double totalPrice = 0;

        for (int i = 0; i < product.length; ++i) {
            int price = productID_toPrice[product[i]];
            totalPrice += price * amount[i];
        }

        if (countCustomers % nthCustomerEligibleForDiscount == 0) {
            totalPrice *= discountedPriceFraction;
        }

        return totalPrice;
    }
}
```
```JavaScript []
class Cashier {

    static #RANGE_OF_PRODUCT_ID = [1, 200];

    #productID_toPrice = [];
    #nthCustomerEligibleForDiscount = 0;
    #discountedPriceFraction = 0;
    #countCustomers = 0;

    /**
     * @param {number} n
     * @param {number} discount
     * @param {number[]} products
     * @param {number[]} prices
     */
    constructor(n, discount, products, prices) {
        this.#nthCustomerEligibleForDiscount = n;
        this.#discountedPriceFraction = (100 - discount) / 100;
        this.#productID_toPrice = new Array(Cashier.#RANGE_OF_PRODUCT_ID[1] + 1);

        for (let i = 0; i < products.length; ++i) {
            this.#productID_toPrice[products[i]] = prices[i];
        }
    }

    /** 
     * @param {number[]} product 
     * @param {number[]} amount
     * @return {number}
     */
    getBill(product, amount) {
        ++this.#countCustomers;
        let totalPrice = 0;

        for (let i = 0; i < product.length; ++i) {
            const price = this.#productID_toPrice[product[i]];
            totalPrice += price * amount[i];
        }

        if (this.#countCustomers % this.#nthCustomerEligibleForDiscount === 0) {
            totalPrice *= this.#discountedPriceFraction;
        }

        return totalPrice;
    }
}
```
```TypeScript []
class Cashier {

    private static RANGE_OF_PRODUCT_ID = [1, 200];

    private productID_toPrice: number[];
    private nthCustomerEligibleForDiscount: number;
    private discountedPriceFraction: number;
    private countCustomers: number;

    constructor(n: number, discount: number, products: number[], prices: number[]) {
        this.nthCustomerEligibleForDiscount = n;
        this.discountedPriceFraction = (100 - discount) / 100;
        this.productID_toPrice = new Array(Cashier.RANGE_OF_PRODUCT_ID[1] + 1);
        this.countCustomers = 0;

        for (let i = 0; i < products.length; ++i) {
            this.productID_toPrice[products[i]] = prices[i];
        }
    }

    getBill(product: number[], amount: number[]): number {
        ++this.countCustomers;
        let totalPrice = 0;

        for (let i = 0; i < product.length; ++i) {
            const price = this.productID_toPrice[product[i]];
            totalPrice += price * amount[i];
        }

        if (this.countCustomers % this.nthCustomerEligibleForDiscount === 0) {
            totalPrice *= this.discountedPriceFraction;
        }

        return totalPrice;
    }
}
```
```C++ []
#include <array>
#include <vector>
using namespace std;

/*
// The code will run faster with ios::sync_with_stdio(0).
// However, this should not be used in production code and interactive problems.
// In this particular problem, it is ok to apply ios::sync_with_stdio(0).

// Many of the top-ranked C++ solutions for time on leetcode apply this trick,
// so, for a fairer assessment of the time percentile of my code
// you could outcomment the lambda expression below for a faster run.
const static auto speedup = [] {
    ios::sync_with_stdio(0);
    return nullptr;
}();
*/

class Cashier {

    static constexpr array<int, 2>  RANGE_OF_PRODUCT_ID{ {1, 200} };

    array<int, RANGE_OF_PRODUCT_ID[1] + 1> productID_toPrice{};
    int nthCustomerEligibleForDiscount{};
    double discountedPriceFraction{};
    int countCustomers{};

public:
    Cashier(int n, int discount, const vector<int>& products, const vector<int>& prices) {
        this->nthCustomerEligibleForDiscount = n;
        this->discountedPriceFraction = (double)(100 - discount) / 100;

        for (size_t i = 0; i < products.size(); ++i) {
            productID_toPrice[products[i]] = prices[i];
        }
    }

    double getBill(const vector<int>& product, const vector<int>& amount) {
        ++countCustomers;
        double totalPrice = 0;

        for (size_t i = 0; i < product.size(); ++i) {
            int price = productID_toPrice[product[i]];
            totalPrice += price * amount[i];
        }

        if (countCustomers % nthCustomerEligibleForDiscount == 0) {
            totalPrice *= discountedPriceFraction;
        }

        return totalPrice;
    }
};
```
```C# []
using System;

public class Cashier
{
    private static readonly int[] RANGE_OF_PRODUCT_ID = { 1, 200 };

    private readonly int[] productID_toPrice;
    private readonly int nthCustomerEligibleForDiscount;
    private readonly double discountedPriceFraction;

    private int countCustomers;

    public Cashier(int n, int discount, int[] products, int[] prices)
    {
        nthCustomerEligibleForDiscount = n;
        this.discountedPriceFraction = (double)(100 - discount) / 100;
        productID_toPrice = new int[RANGE_OF_PRODUCT_ID[1] + 1];

        for (int i = 0; i < products.Length; ++i)
        {
            productID_toPrice[products[i]] = prices[i];
        }
    }

    public double GetBill(int[] product, int[] amount)
    {
        ++countCustomers;
        double totalPrice = 0;

        for (int i = 0; i < product.Length; ++i)
        {
            int price = productID_toPrice[product[i]];
            totalPrice += price * amount[i];
        }

        if (countCustomers % nthCustomerEligibleForDiscount == 0)
        {
            totalPrice *= discountedPriceFraction;
        }

        return totalPrice;
    }
}
```
```Kotlin []
class Cashier(n: Int, discount: Int, products: IntArray, prices: IntArray) {

    private companion object {
        val RANGE_OF_PRODUCT_ID = intArrayOf(1, 200)
    }

    private var productID_toPrice = IntArray(RANGE_OF_PRODUCT_ID[1] + 1)
    private var nthCustomerEligibleForDiscount = n
    private var discountedPriceFraction: Double = 0.0
    private var countCustomers = 0

    init {
        this.discountedPriceFraction = (100 - discount.toDouble()) / 100
        for (i in products.indices) {
            productID_toPrice[products[i]] = prices[i]
        }
    }

    fun getBill(product: IntArray, amount: IntArray): Double {
        ++countCustomers
        var totalPrice: Double = 0.0

        for (i in product.indices) {
            val price = productID_toPrice[product[i]]
            totalPrice += price * amount[i]
        }

        if (countCustomers % nthCustomerEligibleForDiscount == 0) {
            totalPrice *= discountedPriceFraction
        }

        return totalPrice
    }
}
```
```Go []
package main

import "fmt"

var RANGE_OF_PRODUCT_ID [2]int = [2]int{1, 200}

type Cashier struct {
    productID_toPrice              []int
    nthCustomerEligibleForDiscount int
    discountedPriceFraction        float64
    countCustomers                 int
}

func Constructor(n int, discount int, products []int, prices []int) Cashier {
    cashier := Cashier{
        productID_toPrice:              make([]int, RANGE_OF_PRODUCT_ID[1]+1),
        nthCustomerEligibleForDiscount: n,
        discountedPriceFraction:        (100.0 - float64(discount)) / 100.0,
        countCustomers:                 0,
    }

    for i := range products {
        cashier.productID_toPrice[products[i]] = prices[i]
    }
    return cashier
}

func (this *Cashier) GetBill(product []int, amount []int) float64 {
    this.countCustomers++
    var totalPrice float64 = 0

    for i := range product {
        price := this.productID_toPrice[product[i]]
        totalPrice += float64(price * amount[i])
    }

    if this.countCustomers%this.nthCustomerEligibleForDiscount == 0 {
        totalPrice *= this.discountedPriceFraction
    }

    return totalPrice
}
```