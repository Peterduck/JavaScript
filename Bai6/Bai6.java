package Bai6;

import java.util.Scanner;

public class Bai6 {
  public static void checkYear(int year){
    if(year%4 == 0 && year!=100){
      System.out.println(year +" la nam nhuan");
    }
    else{
      System.out.println(year+" Khong phai nam nhuan");
    }
  }
  public static void main(String[] args){
  // Viết chương trình xem một năm có phải là năm nhuần hay không
    Scanner sc = new Scanner(System.in);
    System.out.println("Enter any year you want");
    int year = sc.nextInt();
    checkYear(year);
}
}
