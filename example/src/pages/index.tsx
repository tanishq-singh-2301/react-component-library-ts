import { Button } from 'react-tailwindcss-typescript-component-boilerplate';

const Home = () => {
    return (
        <div className="h-full w-full flex justify-center items-center">
            <main>
                <Button
                    name='click me'
                    onClick={() => console.log("clicked")}
                    key="1"
                />
                <Button
                    name='click me'
                    onClick={() => console.log("clicked")}
                    key="2"
                />
            </main>
        </div>
    )
}

export default Home;