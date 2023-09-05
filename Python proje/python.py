import random

bilgisayar_tahmini = random.randint(1, 100)
# print('Rastgele seçilen sayı:', bilgisayar_tahmini)
print("1 ile 100 arasında bir sayı tutunuz.")
tutulan_sayı = int(input("Tuttuğunuz sayıyı giriniz: "))

kullanıcı_tahmin_hakkı = 6
bilgisayar_tahmin_hakkı = 8

for i in range(kullanıcı_tahmin_hakkı):
    kullanıcı_tahmini = int(input("Tahmininizi girin (kullanıcı): "))
    kullanıcı_tahmin_hakkı -=6
    if kullanıcı_tahmini == bilgisayar_tahmini:
        print("Doğru bildiniz. Tebrikler!", bilgisayar_tahmini)  
        break
    elif kullanıcı_tahmini < bilgisayar_tahmini:
        print("Daha büyük bir sayı giriniz (kullanıcı)")
    else:
        print("Daha küçük bir sayı giriniz (kullanıcı)")
for i in range(bilgisayar_tahmin_hakkı):
    bilgisayar_tahmin = random.randint(1, 100)
    print("Bilgisayarın tahmini:", bilgisayar_tahmin) 
    bilgisayar_tahmin_hakkı -= 8
    if bilgisayar_tahmini == kullanıcı_tahmini:
        print ("Doğru bildiniz. Tebrikler!", tutulan_sayı)
        break
    elif bilgisayar_tahmini < kullanıcı_tahmini:
        print("Daha büyük bir sayı giriniz (bilgisayar)")
    else :
        print("Daha küçük bir sayı giriniz (bilgisayar)")

else:
    print("(Kullanıcı ve bilgisayar) Tahmin hakkınızı tükettiniz:( Tutulan sayı:", tutulan_sayı,"Bilgisayarın tuttuğu sayı: " ,bilgisayar_tahmini)    