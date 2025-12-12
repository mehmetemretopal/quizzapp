package com.met.quizzapp.api.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.met.quizzapp.api.entity.Student;

public interface QuizRepository extends JpaRepository<Student,Long>{

    Student findByName (String name);
} 
