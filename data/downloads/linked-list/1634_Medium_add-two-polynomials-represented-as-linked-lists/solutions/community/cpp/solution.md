# C++ | Recursive and iterative solutions

**Author:** SidSingh905
**Votes:** 1
**Link:** [https://leetcode.com/problems/add-two-polynomials-represented-as-linked-lists/solutions/1001605/](https://leetcode.com/problems/add-two-polynomials-represented-as-linked-lists/solutions/1001605/)

---

	* // Recursive version
	PolyNode* addPoly(PolyNode* poly1, PolyNode* poly2) {
        
        if(poly1 == NULL)
            return poly2;
        
        if(poly2 == NULL)
            return poly1;
        
        if(poly1->power > poly2->power){            
            poly1->next = addPoly(poly1->next, poly2);
            return poly1;
        }else if(poly1->power < poly2->power){
            poly2->next = addPoly(poly2->next, poly1);
            return poly2;
        }else{
            int net_coeff = poly1->coefficient + poly2->coefficient;
            int net_power = poly1->power;
            
            if(net_coeff==0)
                return addPoly(poly1->next, poly2->next);
            
            PolyNode* head = new PolyNode(net_coeff, net_power);            
            head->next = addPoly(poly1->next, poly2->next);            
            return head;
        }          
* 		
		// Iterative version
	   PolyNode* addPoly(PolyNode* poly1, PolyNode* poly2) {
        
        PolyNode* dummy_head = new PolyNode();
        PolyNode* prev = dummy_head; 
        
        while(poly1 && poly2){
            
            int pow1 = poly1->power, pow2 = poly2->power;            
            
            if(pow1 > pow2){
                PolyNode* curr = new PolyNode(poly1->coefficient, pow1);
                prev->next = curr;
                prev = curr;
                poly1 = poly1->next;
            }else if(pow1 < pow2){
                PolyNode* curr = new PolyNode(poly2->coefficient, pow2);
                prev->next = curr;
                prev = curr;
                poly2 = poly2->next;
            }else{
                int net_coeff = poly1->coefficient + poly2->coefficient;
                if(net_coeff != 0){
                    PolyNode* curr = new PolyNode(net_coeff, pow1);
                    prev->next = curr;
                    prev = curr;
                }                
                poly1 = poly1->next;
                poly2 = poly2->next;
            }
        }
        
        while(poly1){
            PolyNode* curr = new PolyNode(poly1->coefficient, poly1->power);
            prev->next = curr;
            prev = curr;
            poly1 = poly1->next;
        }
        
        while(poly2){
            PolyNode* curr = new PolyNode(poly2->coefficient, poly2->power);
            prev->next = curr;
            prev = curr;
            poly2 = poly2->next;
        }
        
        return dummy_head->next;
    }