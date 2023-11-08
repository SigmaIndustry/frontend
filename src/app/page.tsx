import Search from './home/search/Search';

export default function Home() {
    function DrawRefactored() {
        try {/* draw */}
        catch (e) {
            LogErrorRefactored(e, 'Error occurred during drawing');
        }
    }
    function LogErrorRefactored(e: any, message: any) {
        console.log(message, e);
    }
    return (
        <section style={{width:"100%", minHeight: '100vh', background: '#111113'}}>
            <Search/>
        </section>
    )
}
