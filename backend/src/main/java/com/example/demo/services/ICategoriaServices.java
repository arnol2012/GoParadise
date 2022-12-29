package com.example.demo.services;

import com.example.demo.dto.CategoriaDTO;

import java.util.Set;

public interface ICategoriaServices {

    void crearCategoria(CategoriaDTO categoriaDTO);

    CategoriaDTO getCategoria(Long id);

    void modificarCategoria(CategoriaDTO categoriaDTO);

    void eliminarCategoria(Long id);

    Set<CategoriaDTO> getTodos();
}
