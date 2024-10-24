import { useForm } from 'react-hook-form';
import '../assets/css/FormList.css';

const ActivityForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Función que se ejecuta al enviar el formulario
  const onSubmit = (data) => {
    console.log(data);
    alert('Formulario enviado con éxito');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="listform container mt-4">
      <div className="mb-3">
        {/* Campo para Nombre de la actividad */}
        <label htmlFor="nombreActividad" className="form-label">
          Nombre de actividad
        </label>
        <input
          id="nombreActividad"
          className={`form-control bg-black text-white ${errors.nombreActividad ? 'is-invalid' : ''}`}
          {...register('nombreActividad', {
            required: 'Especifica tu actividad a agregar',
            maxLength: {
              value: 50,
              message: 'El nombre no puede tener más de 50 caracteres',
            },
          })}
        />
        {errors.nombreActividad && (
          <div className="invalid-feedback">
            {errors.nombreActividad.message}
          </div>
        )}
      </div>

      <div className="mb-3">
        {/* Campo para Hora */}
        <label htmlFor="hora" className="form-label">
          Hora
        </label>
        <input
          type="time"
          id="hora"
          className={`form-control bg-black text-white ${errors.hora ? 'is-invalid' : ''}`}
          {...register('hora', {
            required: 'Especifica la hora de la actividad',
          })}
        />
        {errors.hora && (
          <div className="invalid-feedback">
            {errors.hora.message}
          </div>
        )}
      </div>

      <div className="mb-3">
        {/* Campo para Descripción */}
        <label htmlFor="descripcion" className="form-label">
          Descripción
        </label>
        <textarea
          id="descripcion"
          className={`form-control bg-black text-white ${errors.descripcion ? 'is-invalid' : ''}`}
          rows="3"
          {...register('descripcion', {
            required: 'Genera una descripción de la actividad',
            maxLength: {
              value: 200,
              message: 'La descripción no puede tener más de 200 caracteres',
            },
          })}
        ></textarea>
        {errors.descripcion && (
          <div className="invalid-feedback">
            {errors.descripcion.message}
          </div>
        )}
      </div>

      {/* Botón para enviar el formulario */}
      <button type="submit" className="btn btn-primary">
        Enviar
      </button>
    </form>
  );
};

export default ActivityForm;
