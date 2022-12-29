package com.example.demo.controller;

import com.example.demo.dto.CategoriaDTO;
import com.example.demo.services.ICategoriaServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collection;

@RestController
@RequestMapping("/categoria")
public class CategoriaController {

    @Autowired
    ICategoriaServices categoriaService;

    @PostMapping(path = "/agregar")
    public ResponseEntity<?> addCategoria(@RequestBody CategoriaDTO categoriaDTO){
        categoriaService.crearCategoria(categoriaDTO);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @GetMapping(path = "/listar/{id}")
    public CategoriaDTO getCategoria(@PathVariable Long id){
        return categoriaService.getCategoria(id);
    }

    @PutMapping(path = "/modificar")
    public ResponseEntity<?> modifyCategoria(@RequestBody CategoriaDTO categoriaDTO){
        categoriaService.modificarCategoria(categoriaDTO);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @DeleteMapping(path = "/eliminar/{id}")
    public ResponseEntity<?> deleteCategoria(@PathVariable Long id){
        categoriaService.eliminarCategoria(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @GetMapping(path = "/listar")
    public Collection<CategoriaDTO> getAllCategorias(){
        return categoriaService.getTodos();
    }
}
