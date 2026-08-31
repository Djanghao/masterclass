(define matrix3-d%
  (class object%
    (super-new)
    
    ; n : exact-integer?
    (init-field
      n)
    
    ; set-cell : exact-integer? exact-integer? exact-integer? -> void?
    (define/public (set-cell x y z)
      )
    ; unset-cell : exact-integer? exact-integer? exact-integer? -> void?
    (define/public (unset-cell x y z)
      )
    ; largest-matrix : -> exact-integer?
    (define/public (largest-matrix)
      )))

;; Your matrix3-d% object will be instantiated and called as such:
;; (define obj (new matrix3-d% [n n]))
;; (send obj set-cell x y z)
;; (send obj unset-cell x y z)
;; (define param_3 (send obj largest-matrix))