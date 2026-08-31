# C# Simple using Sorted Dictionary

**Author:** expected_error
**Votes:** 0
**Link:** [https://leetcode.com/problems/stock-price-fluctuation/solutions/5041860/](https://leetcode.com/problems/stock-price-fluctuation/solutions/5041860/)

---

# Code
```
public class StockPrice {
    SortedDictionary<int, int> min;
    SortedDictionary<int, int> max;
    Dictionary<int, int> timePrice;
    int lastTime=-1;
    public StockPrice() {
        min=new SortedDictionary<int, int>();
        max=new SortedDictionary<int, int>();
        timePrice=new Dictionary<int, int>();
    }
    
    public void Update(int timestamp, int price) {
        if(!timePrice.ContainsKey(timestamp))
        {
            timePrice.Add(timestamp, price);
        }
        else
        {
            int oldPrice=timePrice[timestamp];
            if(oldPrice==price)
                return;

            timePrice[timestamp] = price;
            
            if(min[oldPrice]==1)
                min.Remove(oldPrice);
            else
                min[oldPrice]--;
            
            if(max[-1*oldPrice]==1)
                max.Remove(-1*oldPrice);
            else
                max[-1*oldPrice]--;
        }

        if(!min.ContainsKey(price))
            min.Add(price, 0);
            
        min[price]++;

        if(!max.ContainsKey(-1*price))
            max.Add(-1*price, 0);
            
        max[-1*price]++;

        lastTime=Math.Max(timestamp, lastTime);
    }
    
    public int Current() {
        return timePrice[lastTime];
    }
    
    public int Maximum() {
        return max.Keys.First()*-1;
    }
    
    public int Minimum() {
        return min.Keys.First();
    }
}

/**
 * Your StockPrice object will be instantiated and called as such:
 * StockPrice obj = new StockPrice();
 * obj.Update(timestamp,price);
 * int param_2 = obj.Current();
 * int param_3 = obj.Maximum();
 * int param_4 = obj.Minimum();
 */
```