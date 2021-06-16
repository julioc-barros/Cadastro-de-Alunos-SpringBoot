package com.squad6.projectcrud.repository;

import com.squad6.projectcrud.model.Usuario;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UsuarioRepository extends CrudRepository<Usuario, String> {

    Usuario findByLogin(String login);

}
