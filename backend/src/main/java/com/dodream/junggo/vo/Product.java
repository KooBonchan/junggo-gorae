package com.dodream.junggo.vo;

import lombok.*;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

@Table @Data
public class Product {
  @Id
  private Long id;

  private String name;
  private Integer price;
}
