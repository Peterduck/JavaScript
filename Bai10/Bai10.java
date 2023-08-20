package Bai10;

import java.util.Scanner;

public class Bai10 {
  //Viết chương trình JavaScript/Java để tính phép nhân và chia hai số (nhập từ người dùng)
  public static void main(String[] args){
    Scanner sc = new Scanner(System.in);
    System.out.println("Enter x");
    float x = sc.nextFloat();
    System.out.println("Enter y");
    float y = sc.nextFloat();
    System.out.println("Result of x*y = "+(x*y));
    System.out.println("Result of x/y = "+(x/y));
  }

}
