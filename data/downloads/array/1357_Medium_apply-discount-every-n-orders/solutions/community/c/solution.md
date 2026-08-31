# c++ solution || hashmap

**Author:** srinidhi_kanugula
**Votes:** 2
**Link:** [https://leetcode.com/problems/apply-discount-every-n-orders/solutions/2181380/](https://leetcode.com/problems/apply-discount-every-n-orders/solutions/2181380/)

---

```
class Cashier {
public:
    int count=0,x;
    double d;
    unordered_map<int,int>mp;
    Cashier(int n, int discount, vector<int>& products, vector<int>& prices) {
        x=n;
        d=(double)(100-discount)/100;
        int m=products.size();
        for(int i=0;i<m;i++){
            mp[products[i]]=prices[i];
        }
    }
    double getBill(vector<int> p, vector<int> a) {
        count++;
        int m=p.size();
        double res=0;
        for(int i=0;i<m;i++){
            res=res+(mp[p[i]]*a[i]);
        }
        if(count%x==0){
            res=res*d;
        }
        return res;
    }
};
```