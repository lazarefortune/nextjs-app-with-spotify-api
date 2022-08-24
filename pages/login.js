import { getProviders, getSession, signIn, useSession } from "next-auth/react";
import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/router";

export default function SignIn({ providers }) {
  const { data: session } = useSession();

  /*
   Si l'utlisateur est déjà connecté, on le redirige vers la page d'accueil
   TODO: ATTENTION: Il ne faut surtout pas faire ça ici ça crée à nouveau la page du coup il faut trouver une autre solution
   */
  const router = useRouter();
  if (session) {
    return router.push("/");
  }

  return (
    <>
      <div className="flex flex-col items-center h-screen space-y-0 bg-black pt-25">
        <Head>
          <title>Login - Listen</title>
        </Head>
        <Image
          src="https://zupimages.net/up/22/33/bdef.jpeg"
          width={355}
          height={600}
          top={400}
          objectFit="contain"
          className="animate-pulse"
          alt="Listen"
        />

        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <div>
              <button
                className="text-white py-4 px-6 rounded-full bg-[#4dbbedfa] transition duration-300 ease-out
            border border-transparent uppercase font-bold text-xl
            md:text-base tracking-wider hover:scale-105 hover:bg-inherit space-x-10"
                onClick={() => signIn(provider.id)}
              >
                Sign in with {provider.name}
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  console.log(context.req);
  const session = await getSession(context.req);
  // TODO: j'ai tenté la redirection ici mais je n'arrive pas à le faire fonctionner , A revoir
  if (session) {
    return {
      redirect: {
        destination: "/",
      }
    };
  }

  return {
    props: { providers: await getProviders() },
  };
  
}
