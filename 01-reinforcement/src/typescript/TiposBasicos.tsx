export const TiposBasicos = () => {

    const name: string = 'Fernando';
    const age: number = 35;
    const isActive: boolean = true;

    const powers: string[] = ['Speed', 'Fly', 'Strength'];

    powers.push('Invisibility');
    powers.push('Fire');

    return (
        <>
            <h3>Tipos Basicos</h3>
            {name}, {age}, {(isActive) ? 'Activo' : 'No activo'}
            <br />
            {powers.join(', ')}
        </>
    )
}
