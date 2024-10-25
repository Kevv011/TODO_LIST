import ActivityForm from '../components/ActivityForm';

export const Home_List = () => {
    return (
        <section className="mb-5">
            <div className="mt-5 mb-5">
                <h1><strong>Agregar una actividad</strong></h1>
                <h5>Especifica los detalles de tu actividad que quieres programar</h5>
            </div>
            <ActivityForm />
        </section>
    )
}