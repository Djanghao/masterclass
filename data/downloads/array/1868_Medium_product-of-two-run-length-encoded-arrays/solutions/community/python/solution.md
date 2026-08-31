# [Python3] Clean two-pointers solution

**Author:** BlahBlahBlahBlahBlahBlahBlah
**Votes:** 119
**Link:** [https://leetcode.com/problems/product-of-two-run-length-encoded-arrays/solutions/1228261/](https://leetcode.com/problems/product-of-two-run-length-encoded-arrays/solutions/1228261/)

---



    def findRLEArray(self, encoded1: List[List[int]], encoded2: List[List[int]]) -> List[List[int]]:
        product_encoded = []
        
        e1_index = 0
        e2_index = 0
        
        while e1_index < len(encoded1) and e2_index < len(encoded2):
            e1_val, e1_freq = encoded1[e1_index]
            e2_val, e2_freq = encoded2[e2_index]
            
            product_val = e1_val * e2_val
            product_freq = min(e1_freq, e2_freq)
            
            encoded1[e1_index][1] -= product_freq
            encoded2[e2_index][1] -= product_freq
            
            if encoded1[e1_index][1] == 0:
                e1_index += 1
                
            if encoded2[e2_index][1] == 0:
                e2_index += 1
                
            if not product_encoded or product_encoded[-1][0] != product_val:
                product_encoded.append([product_val, product_freq])
            else:
                product_encoded[-1][1] += product_freq
                
        
        
        return product_encoded