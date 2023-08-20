package Bai7;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Date;

public class Bai7 {
  public static void main(String[] args){
    // Viết chương trình JavaScript/Java để tìm hiểu xem ngày 1 tháng 1 có phải là Chủ nhật từ năm 2014 đến năm 2050 hay không
    for(int i =2014; i<=2050; i++){
      LocalDate day = LocalDate.of(i,1,1);
      DateTimeFormatter format = DateTimeFormatter.ofPattern("E,1,1,yyyy");
      String afterFormatDay = day.format(format);
      if(afterFormatDay.contains("Sun")){
        System.out.println("Year with a 1/1 from 2014 to 2050 are suitable is: "+i);
      }
    }
  }

}
