package Bai4;

public class Bai4 {
  public static void main(String[] args){
   int a = 5, b =6, c =7;
   double perimeter = a+b+c;
    System.out.println("Area of triangle having 3 lengths: 5-6-7");
    System.out.println("Triangle area: "+(double)Math.pow((perimeter-a)*(perimeter-b)*(perimeter-c)*perimeter,2));
  }
}
