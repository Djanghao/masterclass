# C++ 100ms, top 96.55%

**Author:** The_Common_Mike
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-k-mirror-numbers/solutions/5289102/](https://leetcode.com/problems/sum-of-k-mirror-numbers/solutions/5289102/)

---

# brute force
the easiest methead is to just iter overa all number antil you finf n number that are both k mirrored and 10 mirrored (10 mirroed number is just a polindrom).

# fancier brute force

As we know we all the numbers we are looking for are polindroms, we can just iter over all the polindroms instede eg:
(1, 2, 3... 9, 11, 22, 33.. 99, 101, 111, 121...)

note that it will just be faster to iterete over the mirrors from the largest base (10 vs k) as there are less mirrored numbers there but I choose to not care, becose the time boost is unoticabole 

# How to iter over all polindroms
when you look at a polindrom you can see a repitsion of data, all of the left side is a mirror of the right side.
also you can see there are two types of polindroms: 
[even length: all the numbers repete] vs [odd length: all but 1 numbers repete]. 

now you can represent any polindrom by thir left side (+ the middle digit if they have 1), and a bollean if the polindrom has an even or odd length.

# why the left side?
if you want to add one to a digit in a polindrom from the rigth side and still keep it a polindrom, you need to add to the corosponding digit in the left side' wich the smaller the digit from the left the larger the overall addition is. and the smaller the digit is in the left side the smaller the overall editsion.

with that logic you can prove that adding 1 to the left side (such 29992 + 1 = 30003: 299+1 == 300) will get us the next smallest polindrom.

# Complexity
- Time complexity: I have no idea
 making the next polindrom in O(log_10(n))
cheking if a number is a k mirorr is O(log_k(n))
but aproximeted number of iters till the next kMirrored polindrom is unknown to me

- Space complexity: $O(1)$
 no memory allocatsion.

# Code
```

class poli{
public:
    long long left;
    long long all;

    long long size;

    // all / halfSize10 == left  
    // its just faster to store it
    long long halfSize10; 
    
    poli(long long n){
        size = getSize(n);
        halfSize10 = pow(10, size/2);
        left = n / halfSize10;
        
        updateAll();

        // in case the rigth side was bigger then the left
        // the our polindrom would be smaller then the origin
        // but the muximom distence is the left side ot he polindrom
        // [worst case O(n^(1/10))]
        while(all < n)
            inc();
    }

    void inc(){
        left++;

        if(left >= halfSize10*(size%2==1? 10: 1)) { // if a digit was added
            size++;
            halfSize10 = pow(10, size/2);
            left = halfSize10/(size%2==0? 10: 1); 
            // 9, 1|1  ::  99, 10|1  ::   999, 10|01  :: 9999, 100|01  ::  99999, 100
        } 
        updateAll();
    }

    void updateAll(){
        long long _left = left;
        if(size%2 == 1) _left /= 10;

        // mirror the left into all
        all = 0;
        while(_left != 0){
            all *= 10;
            all += _left%10;
            _left /= 10;
        }

        all += left * halfSize10;
    }

private:
    long long getSize(long long n){
        long long size = 1;
        while(n != 0) {
            size++;
            n /= 10;
        }
        return size - 1;
    }
};

class Solution {
public:
    long long kMirror(int k, int n) {
        
        poli pol(1);
        long long sum = 0;
        while(n > 0) {
            if(isKPoli(pol.all, k)){
                sum += pol.all;
                n--;
            }
            pol.inc(); // next polindrom
        }      

        return sum;
    }

    bool isKPoli(long long n, long long k)
    {
        // mirror the number in base 10 and check
        // if the mirrored number equals the original
        long long roteted = 0;
        long long n2 = n;
        while(n2 > 0){
            roteted *= k;
            roteted += _n%k;
            n2 /= k;
        }
        return roteted == n;
    }
};
```